import { Router } from "express";
import checkToken from "../../../Middleware/checkToken";

import controller from "./controller";
const router = Router();

router.post("/", checkToken, controller.post);
router.get("/", checkToken, controller.getAll);

export default router;
