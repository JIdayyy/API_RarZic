import { RequestHandler } from "express";
import { Song } from "../songs/interfaces";
import { UserWithoutPassword } from "../users/interfaces";
import {Artist} from "../artists/interfaces
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

export interface PlaylistWithSongs {
  id: string;
  title: string;
  description?: string | null;
  picture?: string | null;
  songs: Song[];

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
  getOnePlaylistWithSongs: RequestHandler<
    { id: string },
    PlaylistWithSongs | Error,
    null
  >;
}
