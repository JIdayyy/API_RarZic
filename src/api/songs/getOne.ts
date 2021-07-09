import SongHandlers from "./interfaces";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const getOne: SongHandlers["getOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    const Song = await prisma.song.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true,
    });
    res.status(200).json(Song);
  } catch (error) {
    return next(error);
  }
};

export default getOne;
