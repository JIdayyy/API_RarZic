import { UserWithoutPassword } from "./../users/interfaces";
import { RequestHandler } from "express";

interface AuthBodyPost {
  username: string;
  password: string;
  id: string;
}

interface UserWithToken {
  email: string;
  userName: string;
  token: string;
  id: string;
  roles: string[];
}

interface userWithoutPassword {
  email: string;
  userName: string;
  roles: string[];
  id: string;
}

export default interface AuthHandler {
  login: RequestHandler<
    Record<string, never>,
    UserWithoutPassword | Error,
    AuthBodyPost
  >;
  register: RequestHandler<
    Record<string, never>,
    AuthBodyPost | Error,
    AuthBodyPost
  >;
}
