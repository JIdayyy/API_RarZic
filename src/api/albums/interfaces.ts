import { RequestHandler } from "express";

interface Album {
  id: string;
  artistId: string;
  title: string;
  picture?: string | null;
  songs?: Array<object>;
  createdAt: Date;
  updatedAt: Date;
}

interface AlbumBodyPost {
  artistId: string;
  picture: string;
  title: string;
  artistName: string;
}
interface AlbumBodyPut {
  createdAt?: Date;
  picture?: string;
  title?: string;
  updatedAt: Date;
}

interface AlbumWithSongs {
  id?: string;
  artistId: string;
  createdAt: Date;
  picture?: string | null;
  title: string;
  updatedAt: Date;
  songs?: Array<object>;
}

export default interface AlbumHandlers {
  getAll: RequestHandler<Record<string, never>, Album[], null>;
  getOne: RequestHandler<{ id: string }, Album | Error, null>;
  post: RequestHandler<Record<string, never>, Album | Error, AlbumBodyPost>;
  put: RequestHandler<Record<string, never>, Album | Error, AlbumBodyPut>;
  deleteOne: RequestHandler<{ id: string }, null, null>;
  getOneAlbumWithSongs: RequestHandler<
    { id: string },
    AlbumWithSongs | Error,
    null
  >;
}
