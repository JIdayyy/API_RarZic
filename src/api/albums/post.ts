import { PrismaClient } from ".prisma/client";
import AlbumHandlers from "./interfaces";

const prisma = new PrismaClient();

const post: AlbumHandlers["post"] = async (req, res, next) => {
  const { picture, title, artistId, artistName } = req.body;
  console.log(req.body);

  const albumPost = req.body;
  try {
    const album = await prisma.album.create({
      data: {
        picture: picture,
        title: title,
        artist: {
          connectOrCreate: {
            create: {
              name: artistName,
            },
            where: {
              name: artistName,
            },
          },
        },
      },
    });

    res.status(200).send(album);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export default post;
