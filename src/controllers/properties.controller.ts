
import { Request, Response } from 'express'
import { IPropertyRequest } from '../interfaces/properties'
import createPropertiesService from '../services/properties/createProperties.service'
import listPropertiesService from '../services/properties/listProperties.service'

const createPropertiesController = async (req: Request, res: Response) => {
    const propertyData: IPropertyRequest = req.body
    const newProperty= await createPropertiesService(propertyData)
    return res.status(201).json(newProperty)
  }
  const listPropertiesController = async(req:Request,res:Response)=>{
    const properties = await listPropertiesService()
    return res.status(200).json(properties);
}

  export {createPropertiesController,listPropertiesController}