import { PrismaClient } from ".prisma/client";
import ArtistHandlers from "./interfaces";

const prisma = new PrismaClient();

const deleteOne: ArtistHandlers["deleteOne"] = async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.artist.delete({ where: { id } });
    res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

export default deleteOne;
