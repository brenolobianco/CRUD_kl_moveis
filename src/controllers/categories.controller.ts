import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategories.service";
import listCategoriesService from "../services/categories/listCategories.service";
import { listCategoryPropertyService } from "../services/categories/listPropertiesCategory.service";

const createCategoriesController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newTechnology = await createCategoryService(name);
  return res.status(201).json(newTechnology);
};
const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await listCategoriesService();
  return res.json(categories);
};
const listPropertiesCategoriesController = async (
  req: Request,
  res: Response
) => {
  const properties = await listCategoryPropertyService(req.params.id);
  return res.status(200).json(properties);
};
export {
  createCategoriesController,
  listCategoriesController,
  listPropertiesCategoriesController,
};
