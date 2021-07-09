import { PrismaClient } from ".prisma/client";
import PlaylistHandlers from "./interfaces";

const prisma = new PrismaClient();

const put: PlaylistHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const playlistPut = req.body;
  try {
    const playlist = await prisma.playlist.update({
      where: {
        id,
      },
      data: playlistPut,
    });
  } catch (error) {
    next(error);
  }
};

export default put;
