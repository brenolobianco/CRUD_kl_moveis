import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { SchedulesUserProperties } from "../../entities/schedules_user_properties.entity";
import { AppError } from "../../error";

const listAllSchedulesPropertyService = async (property_Id: string) => {
  const schedulesRepository = AppDataSource.getRepository(
    SchedulesUserProperties
  );
  const schedules = await schedulesRepository.findOne({
    where: { id: property_Id },
    relations: {
      property: true,
    },
  });

  if (!schedules) {
    throw new AppError("Invalid Id", 404);
  }

  return schedules;
};

export default listAllSchedulesPropertyService;
