import {RequestHandler} from "express"

interface Album{
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




export default interface AlbumHandlers {
    getAll: RequestHandler<Record<string, never>, Album[], null>;
    getOne: RequestHandler<{id: string}, Album , null>;
    post: RequestHandler<Record<string,never>, Album | Error, AlbumBodyPost>;
    deleteOne: RequestHandler<{id: string}, null,null>
}