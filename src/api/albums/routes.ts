import { Router } from "express";
import controller from "./controller";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.get("/:id/songs", controller.getOneAlbumWithSongs);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/", controller.deleteOne);

export default router;
