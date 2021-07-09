import { RequestHandler } from "express";
import { Song } from "../songs/interfaces";
import { UserWithoutPassword } from "../users/interfaces";

export interface Playlist {
  id: string;
  title: string;
  description?: string | null;
  picture?: string | null;
}
export interface PlaylistBodyPost {
  id: string;
  title: string;
  description?: string | null;
  picture?: string | null;
}

export default interface PlaylistHandlers {
  getAll: RequestHandler<Record<string, never>, Playlist[], null>;
  getOne: RequestHandler<{ id: string }, Playlist | Error, null>;
  post: RequestHandler<
    Record<string, never>,
    Playlist | Error,
    PlaylistBodyPost
  >;
  put: RequestHandler<{ id: string }, Playlist | Error, null>;
  deleteOne: RequestHandler<{ id: string }, null, null>;
}
