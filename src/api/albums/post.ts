import { PrismaClient } from ".prisma/client";
import AlbumHandlers from "./interfaces";

const prisma = new PrismaClient();

const post: AlbumHandlers["post"] = async (req, res, next) => {
  const { picture, title, artistId } = req.body;

  const albumPost = req.body;

  try {
    const album = await prisma.album.create({
      data: {
        picture: picture,
        title: title,
        artistId: artistId,
      },
    });

    res.status(200).send(album);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export default post;
