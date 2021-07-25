import { PrismaClient } from ".prisma/client";
import AlbumHandlers from "./interfaces";

const prisma = new PrismaClient();

const deleteOne: AlbumHandlers["deleteOne"] = async (req, res, next) => {
  console.log("ok");
  const { id } = req.params;
  try {
    await prisma.album.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export default deleteOne;
