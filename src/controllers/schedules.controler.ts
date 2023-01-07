import { Request, Response } from 'express'
import { IScheduleRequest } from '../interfaces/schedules'
import createScheduleService from '../services/schedules/createSchedules.service'
import listAllSchedulesPropertyService from '../services/schedules/listSchedulesOfProperty.service'

const createScheduleController = async (req: Request, res: Response) => {
    const scheduleData: IScheduleRequest = req.body
    const newSchedule= await createScheduleService(scheduleData)
    return res.status(201).json(newSchedule)
  }
  const listAllSchedulesPropertyController = async (req: Request, res: Response) => {
    const propertyId  = req.params.id
    const projects = await listAllSchedulesPropertyService(propertyId)
    return res.status(200).json(projects)
}

export { createScheduleController,listAllSchedulesPropertyController }