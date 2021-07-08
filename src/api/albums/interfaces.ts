import { RequestHandler } from "express"

interface Album {
    id: string,
    artistId: string,
    createdAt: Date,
    picture: string,
    title: string,
    updatedAt: Date,
}

interface AlbumBodyPost {
    artistId: string,
    picture: string,
    title: string,
}
interface AlbumBodyPut {
    id: string,
    artistId: string,
    createdAt: Date,
    picture: string,
    title: string,
    updatedAt: Date,
}




export default interface AlbumHandlers {
    getAll: RequestHandler<Record<string, never>, Album[], null>;
    getOne: RequestHandler<{ id: string }, Album | Error, null>;
    post: RequestHandler<Record<string, never>, Album | Error, AlbumBodyPost>;
    put: RequestHandler<
        Record<string, never>,
        Album | Error,
        AlbumBodyPut
    >;
    deleteOne: RequestHandler<{ id: string }, null, null>
}