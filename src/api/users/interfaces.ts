import { RequestHandler } from "express";

export interface UserWithoutPassword {
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: Array<string>;
}
interface ReqBodyUserPost {
  firstName: string | null;
  lastName: string | null;
  password: string;
  confirmPassword: string;
  username: string;
  roles: Array<string>;
}
interface ReqBodyUserPut {
  firstName: string | null;
  lastName: string | null;
  password: string;
  username: string;
  roles: Array<string>;
  createdAt: Date;
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
