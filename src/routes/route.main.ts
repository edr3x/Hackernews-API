import { Router } from "express";
const router = Router();
import newsController from "../controllers/controller.news";

router.get("/v0/top/:num", newsController.topController);
router.get("/v0/new/:num", newsController.newController);
router.get("/v0/best/:num", newsController.bestController);

export default router;
