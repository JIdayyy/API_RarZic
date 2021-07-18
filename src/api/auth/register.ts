import { PrismaClient } from ".prisma/client";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt";
import AuthHandler from "./interfaces";
const prisma = new PrismaClient();
const register: AuthHandler["register"] = async (req, res, next) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
export default register;
