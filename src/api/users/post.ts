import { PrismaClient } from ".prisma/client";
import UserHandlers from "./interfaces";
const prisma = new PrismaClient();

const post: UserHandlers["post"] = async (req, res) => {
  const { confirmPassword, password, ...userWithoutPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      res.status(422);
      throw new Error("Password confirmation doesn't match");
    }
    const user = await prisma.user.create({
      data: { password: password, ...userWithoutPassword },
    });

    const { password: pw, ...createdUserWithoutPassword } = user;
    res.status(201).send(createdUserWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
};

export default post;
