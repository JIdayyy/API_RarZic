import ArtistHandlers from "./interfaces";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const getAll: ArtistHandlers["getAll"] = async (req, res, next) => {
  try {
    const allArtists = await prisma.artist.findMany();
    res.status(200).json(allArtists);
  } catch (error) {
    return next(error);
  }
};

export default getAll;
