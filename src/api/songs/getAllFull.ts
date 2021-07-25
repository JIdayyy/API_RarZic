import express from "express";
import prisma from "../../../prisma/client";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const songs = await prisma.song.findMany({
      select: {
        id: true,
        title: true,
        duration: true,
        s3Link: true,
        artist: {
          select: {
            name: true,
            picture: true,
          },
        },
        album: {
          select: {
            title: true,
            picture: true,
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
});
