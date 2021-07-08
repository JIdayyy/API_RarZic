import {Album, PrismaClient} from '.prisma/client'
import AlbumHandlers from './interfaces'
const prisma = new PrismaClient()

const post : AlbumHandlers["post"] = async (req,res) => {
    const albumPost = req.body

    try {
        const album = await prisma.album.create({
            data: albumPost
        })
        res.status(200).send(album)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export default post