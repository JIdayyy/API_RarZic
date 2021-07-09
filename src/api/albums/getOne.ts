import { PrismaClient } from ".prisma/client";
import AlbumHandlers from "./interfaces";
const prisma = new PrismaClient();

const getOne: AlbumHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const album = await prisma.album.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
    res.status(200).send(album);
  } catch (error) {
    return next(error);
  }
};

export default getOne;
