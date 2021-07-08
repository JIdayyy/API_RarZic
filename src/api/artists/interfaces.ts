import { RequestHandler } from "express";


interface Artist{
    id: string,
    createdAt: Date,
    picture: string,
    updatedAt: Date,
    name:string,
}

interface ArtistBodyPost{
    name:string,
    picture: string,
}

interface ArtistBodyPut{
    id: string,
    createdAt: Date,
    picture: string,
    updatedAt: Date,
    name:string,
}

export default interface ArtistHandlers{
    getAll: RequestHandler<Record<string, never>, Artist[], null>;
    getOne: RequestHandler<{id: string}, Artist,null>
    post: RequestHandler<Record<string,never>,ArtistBodyPost | Error,ArtistBodyPost>
    put: RequestHandler<Record<string,never>, Artist | Error, ArtistBodyPut>
    deleteOne: RequestHandler<{id: string}, null,null>
}

