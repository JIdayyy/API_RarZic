import { PrismaClient } from ".prisma/client";
import PlaylistHandlers from "./interfaces";

const prisma = new PrismaClient();

const put: PlaylistHandlers["put"] = (req, res, next) => {};

export default put;
