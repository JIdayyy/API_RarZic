import { PrismaClient } from '.prisma/client'
import AlbumHandlers from './interfaces'
const prisma = new PrismaClient()

const post: AlbumHandlers["put"] = async (req, res) => {
    const { id } = req.params
    const albumPost = req.body
    try {
        const album = await prisma.album.update({
            where: { id },
            data: albumPost
        })
        res.status(200).send(album)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export default post