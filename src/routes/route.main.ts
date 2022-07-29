import { Router } from "express";
const router = Router();
import newsController from "../controllers/controller.news";

router.get("/top/:num", newsController.topController);
router.get("/new/:num", newsController.newController);
router.get("/best/:num", newsController.bestController);

export default router;
