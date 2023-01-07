import { Router } from "express";
import {
  createPropertiesController,
  listPropertiesController,
} from "../controllers/properties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import verifyUserAdmMiddleware from "../middlewares/verifyUserAdm.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { addresRequestSerializer, createPropertySerializer } from "../serializers/property.serializer";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  validateSchemaMiddleware(createPropertySerializer),
  verifyUserAdmMiddleware,
  createPropertiesController
);
propertiesRoutes.get("", listPropertiesController);

export default propertiesRoutes;
