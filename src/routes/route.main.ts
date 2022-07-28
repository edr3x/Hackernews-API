import { Router } from "express";
const router = Router();
import newsController from "../controllers/controller.news";

router.get("/v0/top", newsController.topController);

export default router;
