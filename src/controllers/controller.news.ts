import { Request, Response } from "express";
import { NewsServices } from "../services/services.main";

const topController = async (req: Request, res: Response) => {
  const resData = await NewsServices.getTop();

  res.status(200).json(resData);
};

const newController = (req: Request, res: Response) => {};

const bestController = (req: Request, res: Response) => {};

export default { topController, newController, bestController };
