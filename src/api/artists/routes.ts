import { Router } from "express";
import checkToken from "../../../Middleware/checkToken";

import controller from "./controller";
const router = Router();

router.get("/", checkToken, controller.getAll);
router.get("/:id/albums", checkToken, controller.getOneArtistWithAlbums);
router.get("/:id", checkToken, controller.getOne);
router.post("/", checkToken, controller.post);
router.put("/:id", checkToken, controller.put);
router.delete("/", checkToken, controller.deleteOne);

export default router;
