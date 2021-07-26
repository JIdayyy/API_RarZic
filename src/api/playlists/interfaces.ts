import { RequestHandler } from "express";
import { Song } from "../songs/interfaces";

export interface Playlist {
  id: string;
  title: string;
  description?: string | null;
  picture?: string | null;
  userId: string;
}
export interface PlaylistBodyPost {
  id: string;
  title: string;
  description?: string | null;
  picture?: string | null;
  userId: string;
}
export interface PlaylistBodyPut {
  id: string;
  title: string;
  description?: string | null;
  picture?: string | null;
  userId: string;
}

export default interface PlaylistHandlers {
  getAll: RequestHandler<Record<string, never>, Playlist[], null>;
  getOne: RequestHandler<{ id: string }, Playlist | Error, null>;
  post: RequestHandler<
    Record<string, never>,
    Playlist | Error,
    PlaylistBodyPost
  >;
  put: RequestHandler<Record<string, never>, Playlist | Error, PlaylistBodyPut>;
  deleteOne: RequestHandler<{ id: string }, null, null>;
  getOnePlaylistWithSongs: RequestHandler<{ id: string }, Song[] | Error, null>;
}
