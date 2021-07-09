import { PrismaClient } from ".prisma/client";
import PlaylistHandlers from "./interfaces";
const prisma = new PrismaClient();

const getAll: PlaylistHandlers["getAll"] = async (req, res, next) => {
  try {
    const allPlaylists = await prisma.playlist.findMany();
    res.status(200).send(allPlaylists);
  } catch (error) {
    return next(error);
  }
};
export default getAll;
