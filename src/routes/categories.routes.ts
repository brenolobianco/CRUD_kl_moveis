import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesController,
  listPropertiesCategoriesController,
} from "../controllers/categories.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import verifyUserAdmMiddleware from "../middlewares/verifyUserAdm.middleware";

const categoriesRoutes = Router();
categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  verifyUserAdmMiddleware,
  createCategoriesController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listPropertiesCategoriesController);

export default categoriesRoutes;
