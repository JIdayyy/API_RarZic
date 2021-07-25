import AlbumHandlers from "./interfaces";
import getAll from "./getAll";
import put from "./put";
import getOne from "../albums/getOne";
import post from "../albums/post";
import getOneAlbumWithSongs from "./getOneAlbumWithSongs";
import deleteOne from "./delete";
const controller: AlbumHandlers = {
  getAll,
  post,
  getOne,
  deleteOne,
  put,
  getOneAlbumWithSongs,
};

export default controller;
