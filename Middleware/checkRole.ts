import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function checkRole(req: any, res: any, next: NextFunction): void {
  try {
    const token = req.cookies.token;

    if (typeof token === "undefined") {
      throw new Error("You need to login.");
    }

    req.user = jwt.verify(token, process.env.TOKEN_SECRET as string);

    if (req.user.role !== "ADMIN") {
      throw new Error("Only administrators can acces this ressource");
    }

    return next();
  } catch (err) {
    res.status(401);

    return next(err);
  }
}

export default checkRole;
