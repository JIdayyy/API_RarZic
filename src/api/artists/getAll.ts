
import ArtistHandlers from "./interfaces";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()


const getAll: ArtistHandlers["getAll"] = async (req, res) => {
 try {
  const allArtists = await prisma.artist.findMany()
  res.status(200).json(allArtists)
 } catch (error) {
   res.status(500).send(error)
 }
};

export default getAll;