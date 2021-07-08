import ArtistHandlers from "./interfaces";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()


const getOne: ArtistHandlers["getOne"] = async (req, res) => {
    const {id} = req.params
 try {
  const artist = await prisma.artist.findUnique({
      where: {
          id
      },
      rejectOnNotFound: true
  })
  res.status(200).json(artist)
 } catch (error) {
   res.status(500).send(error)
 }
};

export default getOne;