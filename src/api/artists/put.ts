import { PrismaClient } from '.prisma/client'
import ArtistHandlers from './interfaces'
const prisma = new PrismaClient()

const put: ArtistHandlers["put"] = async (req, res) => {
    const { id } = req.params
    const artistPut = req.body
    try {
        const artist = await prisma.artist.update({
            where: { id },
            data: artistPut
        })
        res.status(200).send(artist)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export default put