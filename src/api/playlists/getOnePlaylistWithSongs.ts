import { PrismaClient } from ".prisma/client";
import PlaylistHandlers from "./interfaces";
const prisma = new PrismaClient();

const getOnePlaylistWithSongs: PlaylistHandlers["getOnePlaylistWithSongs"] =
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const playlist = await prisma.playlist
        .findFirst({
          where: {
            id,
          },

          rejectOnNotFound: true,
        })
        .songs();
      return res.status(200).json(playlist);
    } catch (error) {
      return next(error);
    }
  };

export default getOnePlaylistWithSongs;
