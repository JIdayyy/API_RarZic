import { PrismaClient } from ".prisma/client";
import ArtistHandlers from "./interfaces";
const prisma = new PrismaClient();

const post: ArtistHandlers["post"] = async (req, res, next) => {
  const artistPost = req.body;

  try {
    const artist = await prisma.artist.create({
      data: artistPost,
    });
    res.status(200).send(artist);
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

export default post;
