import AppDataSource from "../../data-source";
import { Address } from "../../entities/addres.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../error";
import { IPropertyRequest } from "../../interfaces/properties";
import { propertyResponseSerializer } from "../../serializers/property.serializer";

const createPropertiesService = async (propertyData: IPropertyRequest) => {
  const addressRepository = AppDataSource.getRepository(Address);
  const propertyRepository = AppDataSource.getRepository(Properties);
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOneBy({
    id: propertyData.categoryId,
  });
  if (!category) {
    throw new AppError("Invalid Category Id ", 404);
  }
  const addressExists = await addressRepository.findOne({
    where: {
      district: propertyData.address.district,
      zipCode: propertyData.address.zipCode,
      state: propertyData.address.state,
      city: propertyData.address.city,
      number: propertyData.address.number,
    },
  });

  if (addressExists) {
    throw new AppError("Adress Already Exists", 409);
  }
  const address = addressRepository.create({ 
    district: propertyData.address.district,
    zipCode: propertyData.address.zipCode,
    state: propertyData.address.state,
    city: propertyData.address.city,
    number: propertyData.address.number,});

  await addressRepository.save(address);

  const createdProperty = propertyRepository.create({
    value:propertyData.value,
    size:propertyData.size,
    address:address,
    category:category,
  });

  console.log(createdProperty)
  await propertyRepository.save(createdProperty);

  // console.log(createdProperty)

  const propertyValid = await propertyResponseSerializer.validate(
    createdProperty,
    {
     stripUnknown:true,
      abortEarly: false,
    }
  );
  return createdProperty;
};

export default createPropertiesService;
