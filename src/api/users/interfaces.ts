import { RequestHandler } from "express";
import { Role } from ".prisma/client";
export interface UserWithoutPassword {
  firstName: string | null;
  lastName: string | null;
  username: string;
  role: Role;
}
interface ReqBodyUserPost {
  firstName: string | null;
  lastName: string | null;
  password: string;
  confirmPassword: string;
  username: string;
  role: Role;
}
interface ReqBodyUserPut {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  username?: string;
  role?: Role;
  createdAt?: Date;
}

export default interface UserHandlers {
  getAll: RequestHandler<Record<string, never>, UserWithoutPassword[], null>;
  getOne: RequestHandler<{ id: string }, UserWithoutPassword | Error, null>;
  post: RequestHandler<
    Record<string, never>,
    UserWithoutPassword | Error,
    ReqBodyUserPost
  >;
  put: RequestHandler<
    Record<string, never>,
    UserWithoutPassword | Error,
    ReqBodyUserPut
  >;
  deleteOne: RequestHandler<{ id: string }, null, null>;
}
