import { Router } from "express";
const router = Router();
import newsController from "../controllers/controller.news";

router.get("/v0/top", newsController.topController);
router.get("/v0/new", newsController.newController);
router.get("/v0/best", newsController.bestController);

export default router;
