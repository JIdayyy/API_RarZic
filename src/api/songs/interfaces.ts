import { RequestHandler } from "express";
import { Artist, Album } from ".prisma/client";
export interface Song {
  id: string;
  title: string;
  s3Link: string;
  duration: string;
  updatedAt: Date;
  createdAt: Date;
  artist?: string;
  artistId: string;
  album?: string;
  albumId: string;
  playlist?: string | null;
  playlistId?: string | null;
}
export interface SongFull {
  id: string;
  title: string;
  s3Link: string;
  duration: string;
  updatedAt: Date;
  createdAt: Date;
  artist?: Artist;
  artistId: string;
  album?: Album;
  albumId: string;
  playlist?: string | null;
  playlistId?: string | null;
}
interface SongBodyPost {
  title: string;
  s3Link: string;
  duration: string;
  artist?: string;
  artistId: string;
  album?: string;
  albumId: string;
  playlist?: string | null;
  playlistId?: string | null;
}
interface SongBodyPut {
  title: string;
  s3Link: string;
  duration: string;
  artist?: string;
  artistId: string;
  album?: string;
  albumId: string;
  playlist?: string | null;
  playlistId?: string | null;
}

export default interface SongHandlers {
  getAll: RequestHandler<Record<string, never>, Song[], null>;
  getAllFull: RequestHandler<Record<string, never>, SongFull[], null>;
  put: RequestHandler<{ id: string }, Song | Error, any>;
  deleteOne: RequestHandler<{ id: string }, null, null>;
  getOne: RequestHandler<{ id: string }, Song | Error, null>;
  post: RequestHandler<
    Record<string, never>,
    SongBodyPost | Error,
    SongBodyPost
  >;
}
