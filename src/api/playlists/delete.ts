import { PrismaClient } from ".prisma/client";
import PlaylistHandlers from "./interfaces";
const prisma = new PrismaClient();

const deleteOne: PlaylistHandlers["deleteOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.playlist.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default deleteOne;
