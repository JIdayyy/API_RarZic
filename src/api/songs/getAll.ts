import SongHandlers from "./interfaces";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

const getAll: SongHandlers["getAll"] = async (req, res) => {
  try {
    const allSongs = await prisma.song.findMany();
    res.status(200).json(allSongs);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getAll;
