import {  PrismaClient } from '.prisma/client';
import UserHandlers from "./interfaces";
const prisma = new PrismaClient()

const deleteOne: UserHandlers["deleteOne"] =  async (req,res) => {
    const {id} = req.params
    try {
       await prisma.user.delete({where: {id}})
        res.status(204).end()
    } catch (error) {
        res.status(500).send(error)
    }
}  

export default deleteOne