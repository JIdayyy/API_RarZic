import { Router } from "express";
import controller from "./controller";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id/songs", controller.getOnePlaylistWithSongs);
router.get("/:id", controller.getOne);
router.put("/:id", controller.put);
router.post("/", controller.post);
router.delete("/", controller.deleteOne);

export default router;
