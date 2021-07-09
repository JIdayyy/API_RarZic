import { Router } from "express";

import controller from "./controller";
const router = Router();

router.get("/", controller.getAll);
router.get("/:id/songs", controller.getOnePlaylistWithSongs);
router.get("/:id", controller.getOne);
router.delete("/", controller.deleteOne);
router.post("/", controller.post);
router.put("/", controller.put);

export default router;
