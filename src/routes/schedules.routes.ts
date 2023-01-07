import { Router } from "express";
import {
  createScheduleController,
  listAllSchedulesPropertyController,
} from "../controllers/schedules.controler";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import verifyUserAdmMiddleware from "../middlewares/verifyUserAdm.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddleware, createScheduleController);
schedulesRoutes.get("/properties/:id",ensureAuthMiddleware,verifyUserAdmMiddleware, listAllSchedulesPropertyController);

export default schedulesRoutes;
