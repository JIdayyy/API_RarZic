import { PrismaClient } from ".prisma/client";
import PlaylistHandlers from "./interfaces";

const prisma = new PrismaClient();

const put: PlaylistHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const playlist = await prisma.playlist.update({
      where: {
        id,
      },
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

export default put;
