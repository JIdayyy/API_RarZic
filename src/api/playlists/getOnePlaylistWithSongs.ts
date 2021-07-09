import { PrismaClient } from ".prisma/client";
import PlaylistHandlers from "./interfaces";
const prisma = new PrismaClient();

const getOnePlaylistWithSongs: PlaylistHandlers["getOnePlaylistWithSongs"] =
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const artist = await prisma.playlist.findFirst({
        where: {
          id,
        },
        include: {
          songs: {
            select: {
              id: true,
              s3Link: true,
              title: true,
              duration: true,
              createdAt: true,
              updatedAt: true,
              artistId: true,
              albumId: true,
            },
          },
        },
        rejectOnNotFound: true,
      });
      return res.status(200).json(artist);
    } catch (error) {
      return next(error);
    }
  };

export default getOnePlaylistWithSongs;
