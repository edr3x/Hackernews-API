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

const newController = async (req: Request, res: Response) => {
  try {
    const n: number = parseInt(req.params.num);

    const resData = await NewsServices.getNew(n);

    res.status(200).json(resData);
  } catch (e) {
    res.status(404).json({ error: `${e}` });
  }
};

const bestController = async (req: Request, res: Response) => {
  try {
    const n: number = parseInt(req.params.num);

    const resData = await NewsServices.getNew(n);

    res.status(200).json(resData);
  } catch (e) {
    res.status(404).json({ error: `${e}` });
  }
};

const particular = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);

    const resData = await NewsServices.getParticular(id);

    res.status(200).json(resData);
  } catch (e) {
    res.status(404).json({ error: `${e}` });
  }
};

export default { topController, newController, bestController, particular };
