import {  PrismaClient } from '.prisma/client';
import UserHandlers from "./interfaces";
const prisma = new PrismaClient()

const put: UserHandlers["put"] =  async (req,res) => {
    const userPost = req.body
    const {id} = req.params
    console.log(userPost)
    try {
        
        const user = await prisma.user.update({where: {id},data: userPost})
        res.status(204).send(user)

    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}  

export default put