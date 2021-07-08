import { PrismaClient } from ".prisma/client";
import AlbumHandlers from "./interfaces";
const prisma = new PrismaClient();

const getOneArtistWithAlbums: AlbumHandlers["getOneArtistWithAlbums"] = async (
  req,
  res,
  next
) => {
  const { id } = req.params;
  try {
    const artist = await prisma.artist.findFirst({
      where: {
        id,
      },
      include: {
        albums: {
          select: {
            id: true,
            title: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
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

export default getOneArtistWithAlbums;
