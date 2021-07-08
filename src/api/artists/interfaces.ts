import { RequestHandler } from "express";
import Albums from "../albums/interfaces";
interface Artist {
  id: string;
  createdAt: Date;
  picture?: string | null;
  updatedAt: Date;
  name: string;
}

interface ArtistBodyPost {
  name: string;
  picture?: string | null;
}

interface ArtistBodyPut {
  name: string;
  picture?: string | null;
}

interface ArtistWithAlbums {
  id: string;
  createdAt: Date;
  picture?: string | null;
  updatedAt: Date;
  name: string;
  albums: Array<object>;
}

export default interface ArtistHandlers {
  getAll: RequestHandler<Record<string, never>, Artist[], null>;
  getOne: RequestHandler<{ id: string }, Artist, null>;
  getOneArtistWithAlbums: RequestHandler<
    { id: string },
    ArtistWithAlbums | Error,
    null
  >;
  post: RequestHandler<
    Record<string, never>,
    ArtistBodyPost | Error,
    ArtistBodyPost
  >;
  put: RequestHandler<Record<string, never>, Artist | Error, ArtistBodyPut>;
  deleteOne: RequestHandler<{ id: string }, null, null>;
}
