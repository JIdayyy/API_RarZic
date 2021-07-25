import express from "express";
import prisma from "../../../prisma/client";
import SongHandlers from "./interfaces";

const router = express.Router();

const getAllFull: SongHandlers["getAllFull"] = async (req, res, next) => {
  try {
    const songs = await prisma.song.findMany({
      select: {
        id: true,
        title: true,
        duration: true,
        s3Link: true,
        createdAt: true,
        updatedAt: true,
        artistId: true,
        albumId: true,
        artist: {
          select: {
            name: true,
            picture: true,
            id: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        album: {
          select: {
            title: true,
            picture: true,
            id: true,
            createdAt: true,
            updatedAt: true,
            artistId: true,
          },
        },
        playlists: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};

export default getAllFull;
