
import UserHandlers from "./interfaces";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()


const getAll: UserHandlers["getAll"] = async (req, res) => {
 try {
  const allUsers = await prisma.user.findMany()
  res.status(200).json( allUsers.map((user) => {
    const { password, ...rest } = user;
    return rest;
  }))
 } catch (error) {
   res.status(500).send(error)
 }
};

export default getAll;