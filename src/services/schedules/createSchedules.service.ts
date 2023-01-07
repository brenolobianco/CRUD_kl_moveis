import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { SchedulesUserProperties } from "../../entities/schedules_user_properties.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../error";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (scheduleData: IScheduleRequest) => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUserProperties
  );
  const propertiesRepository = AppDataSource.getRepository(Properties);


  const property = await scheduleRepository.findOneBy({
    id: scheduleData.propertyId,
  });

  if (!property) {
    throw new AppError("Invalid Property id ", 404);
  }


  const propertiesQueryBuilder = scheduleRepository.createQueryBuilder("schedules");
  const scheduleDate = await propertiesQueryBuilder
    .select("schedules")
    .where("schedules.hour < :hour", { hour: 8 });

if (!scheduleDate) {
  throw new AppError("Invalid Date ", 404);
}
  const newSchedule = scheduleRepository.create({
    ...scheduleData,
  
  });

  const createdSchedule = scheduleRepository.create(newSchedule);
  await scheduleRepository.save(createdSchedule);

  return createdSchedule;
};

export default createScheduleService;
