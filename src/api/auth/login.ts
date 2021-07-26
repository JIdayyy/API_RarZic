import { PrismaClient } from ".prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import AuthHandler from "./interfaces";
const prisma = new PrismaClient();
const post: AuthHandler["login"] = async (req, res, next) => {
  const { username, password, id } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
        id,
      },
      rejectOnNotFound: true,
    });
    if (!user) {
      throw new Error("User not found");
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error("Password incorrect");
    }
    const token = jwt.sign(
      {
        username: user.username,
        id: user.id,
        role: user.role,
      },
      process.env.TOKEN_SECRET as string,
      {
        expiresIn: "3600s",
      }
    );
    const { password: removedPassword, ...userWithoutPassword } = user;
    res.cookie("token", token, {
      expires: new Date(Date.now() + 3600 * 1000),
      secure: false, // set to true if your using https
      httpOnly: true,
    });

    res.set({
      "Access-Control-Allow-Credentials": true,
    });
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default post;
