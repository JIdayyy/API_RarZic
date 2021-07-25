import { Router } from "express";
import controller from "./controller";
const router = Router();

router.get("/", controller.getAll);
router.get("/player", controller.getAllFull);
router.get("/:id", controller.getOne);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.deleteOne);

export default router;
