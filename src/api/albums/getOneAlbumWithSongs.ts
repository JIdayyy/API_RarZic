import { PrismaClient } from ".prisma/client";
import AlbumHandlers from "./interfaces";
const prisma = new PrismaClient();

const getOneAlbumWithSongs: AlbumHandlers["getOneAlbumWithSongs"] = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    const album = await prisma.album
      .findFirst({
        where: {
          id,
        },
        rejectOnNotFound: true,
      })
      .songs();
    return res.status(200).json(album);
  } catch (error) {
    return next(error);
  }
};

export default getOneAlbumWithSongs;
