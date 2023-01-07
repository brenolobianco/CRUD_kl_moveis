import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../error";

const verifyUserIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {


  if (!req.user.isActive) {
    throw new AppError("User is not active", 400);
  }
  return next();
};

export default verifyUserIsActiveMiddleware;
