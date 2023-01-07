import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../error";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoriesService = async (
  name: string
): Promise<ICategoryRequest> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const findCategory = await categoryRepository.findOneBy({
    name,
  });

  if (findCategory) {
    throw new AppError("User already Exists ", 409);
  }
  const category = categoryRepository.create({
    name,
  });
  await categoryRepository.save(category);
  return category;
};

export default createCategoriesService;
