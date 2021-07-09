import { PrismaClient } from ".prisma/client";
import SongHandlers from "./interfaces";

const prisma = new PrismaClient();
const put: SongHandlers["put"] = async (req, res, next) => {
  const { id } = req.params;
  const songDatas = req.body;
  try {
    const song = await prisma.song.update({
      where: {
        id,
      },
      data: songDatas,
    });
  } catch (error) {
    next(error);
  }
};

export default put;
