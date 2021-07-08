
import {  PrismaClient } from '.prisma/client';
import UserHandlers from "./interfaces";
const prisma = new PrismaClient()


const getOne: UserHandlers["getOne"] = async (req, res) => {
  const {id} = req.params
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      rejectOnNotFound: true
    })
    const {password , ...userWithoutPassword} = user
    res.status(200).send(userWithoutPassword)
  } catch (error) {
    res.status(500).send(error)
  }
  
};

export default getOne;