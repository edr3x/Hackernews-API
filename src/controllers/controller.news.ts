import { Request, Response } from "express";
import { NewsServices } from "../services/services.main";

const topController = async (req: Request, res: Response) => {
  try {
    const n: number = parseInt(req.params.num);

    const resData = await NewsServices.getTop(n);

    res.status(200).json(resData);
  } catch (e) {
    res.status(404).json({ error: `${e}` });
  }
};

const newController = (req: Request, res: Response) => {};

const bestController = (req: Request, res: Response) => {};

export default { topController, newController, bestController };
