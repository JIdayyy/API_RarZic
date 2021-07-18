import { Router } from "express";
import checkToken from "../../../Middleware/checkToken";

import controller from "./controller";
const router = Router();

router.get("/", checkToken, controller.getAll);
router.get("/:id/songs", checkToken, controller.getOnePlaylistWithSongs);
router.get("/:id", checkToken, controller.getOne);
router.put("/:id", checkToken, controller.put);
router.post("/", checkToken, controller.post);
router.delete("/", checkToken, controller.deleteOne);

export default router;
