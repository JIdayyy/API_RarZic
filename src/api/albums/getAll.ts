
import AlbumHandlers from "./interfaces";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()


const getAll: AlbumHandlers["getAll"] = async (req, res) => {
 try {
  const allAlbums = await prisma.album.findMany()
  res.status(200).json(allAlbums)
 } catch (error) {
   res.status(500).send(error)
 }
};

export default getAll;