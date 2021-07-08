import { RequestHandler } from "express";

interface Song {
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
  playlist?: string;
  playlistId: string;
}
interface SongBodyPost {
  title: string;
  s3Link: string;
  duration: string;
  artist?: string;
  artistId: string;
  album?: string;
  albumId: string;
  playlist?: string;
  playlistId: string;
}

export default interface SongHandlers {
  getAll: RequestHandler<Record<string, never>, Song[], null>;
  post: RequestHandler<
    Record<string, never>,
    SongBodyPost | Error,
    SongBodyPost
  >;
}
