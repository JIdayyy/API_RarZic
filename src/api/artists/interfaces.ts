import { RequestHandler } from "express";


interface Artist{
    id: string,
    createdAt: Date,
    picture: string,
    updatedAt: Date,
}

export default interface ArtistHandlers{
    getAll: RequestHandler<Record<string, never>, Artist[], null>;
}

