import { PrismaClient } from ".prisma/client";
import PlaylistHandlers from "./interfaces";
const prisma = new PrismaClient();

const post: PlaylistHandlers["post"] = async (req, res, next) => {
  const playlistData = req.body;
  try {
    const playlist = await prisma.playlist.create({
      data: playlistData,
    });
  } catch (error) {
    next(error);
  }
};

export default post;
