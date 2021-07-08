import { PrismaClient } from ".prisma/client";
import { asyncFormParse } from "../../../utils/formParser";
import SongHandlers from "./interfaces";
import * as mm from "music-metadata";
import fs from "fs";
import FileType from "file-type";
import { s3UploadFile } from "../../aws";
import { mp3DurationString } from "../../../utils/mp3DurationString";
import { slugify } from "../../../utils/slugify";
const prisma = new PrismaClient();

const post: SongHandlers["post"] = async (req, res, next) => {
  try {
    const { files } = await asyncFormParse(req);

    if (files.file.length > 1) {
      res.status(400);
      throw new Error("Please send only 1 file");
    }

    const { path } = files.file[0];

    const {
      common: { album, albumartist, title },
      format: { duration },
    } = await mm.parseFile(path, {
      duration: true,
    });

    if (!album || !albumartist || !title) {
      const errorMessage = {
        ...(!album && {
          album: "This audio file doesn't have an album in metadata",
        }),

        ...(!albumartist && {
          albumartist:
            "This audio file doesn't have an albumartist in metadata",
        }),
        ...(!title && {
          title: "This audio file doesn't have a title in metadata",
        }),
      };

      throw new Error(JSON.stringify(errorMessage));
    }

    const buffer = fs.readFileSync(path);
    const durationInSeconds = await mp3DurationString(duration);
    const type = await FileType.fromBuffer(buffer);
    const fileName = `${slugify(albumartist)}/${slugify(album)}/${slugify(
      title
    )}`;

    const count = await prisma.song.count({
      where: { title },
    });

    if (count !== 0) {
      res.status(400);
      throw new Error("This song already exists");
    }

    const data = await s3UploadFile(buffer, fileName, type);

    console.log(`Upload to S3 done ! ${fileName}`);

    const newSong = await prisma.song.create({
      data: {
        title,
        duration: durationInSeconds,
        s3Link: data.Location,
        album: {
          connectOrCreate: {
            create: {
              title: album,
              artist: {
                connect: { name: albumartist },
              },
            },
            where: { title: album },
          },
        },
        artist: {
          connectOrCreate: {
            create: {
              name: albumartist,
            },
            where: {
              name: albumartist,
            },
          },
        },
      },
    });

    return res.status(201).json(newSong);
  } catch (error) {
    next(error);
  }
};

export default post;
