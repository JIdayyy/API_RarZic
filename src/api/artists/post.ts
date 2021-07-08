import {PrismaClient} from '.prisma/client'
import ArtistHandlers from './interfaces'
const prisma = new PrismaClient()

const post : ArtistHandlers["post"] = async (req,res) => {
    const artistPost = req.body

    try {
        const artist = await prisma.artist.create({
            data: artistPost
        })
        res.status(200).send(artist)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export default post