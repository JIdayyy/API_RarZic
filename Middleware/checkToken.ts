import { NextFunction } from "express";
import jwt from "jsonwebtoken";

function checkToken(req: any, res: any, next: NextFunction): any {
  try {
    const token = req.cookies.token;

    if (typeof token === "undefined") {
      throw new Error("You need to login.");
    }

    req.user = jwt.verify(token, process.env.TOKEN_SECRET as string);

    return next();
  } catch (err) {
    res.status(401);

    return next(err);
  }
}

export default checkToken;
