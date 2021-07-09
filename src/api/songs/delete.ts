import { PrismaClient } from ".prisma/client";
import SongHandlers from "./interfaces";
const prisma = new PrismaClient();

const deleteOne: SongHandlers["deleteOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.song.delete({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default deleteOne;
