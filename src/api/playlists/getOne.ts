import PlaylistHandlers from "./interfaces";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const getOne: PlaylistHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const Playlist = await prisma.playlist.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(Playlist);
  } catch (error) {
    return next(error);
  }
};

export default getOne;
