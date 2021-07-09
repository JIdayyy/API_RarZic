import PlaylistHandlers from "./interfaces";
import getAll from "./getAll";
import getOne from "./getOne";
import getOnePlaylistWithSongs from "./getOnePlaylistWithSongs";
import put from "./put";
import post from "./post";
import deleteOne from "./delete";
const controller: PlaylistHandlers = {
  getAll,
  put,
  post,
  deleteOne,
  getOnePlaylistWithSongs,
  getOne,
};

export default controller;
