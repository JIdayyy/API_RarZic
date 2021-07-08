import ArtistHandlers from "./interfaces";
import getAll from "../artists/getAll";
import getOne from "../artists/getOne";
import post from "./post";
import deleteOne from "./delete";
import put from "./put";
import getOneArtistWithAlbums from "./getOneArtistWithAlbums";

const controller: ArtistHandlers = {
  getAll,
  post,
  put,
  deleteOne,
  getOne,
  getOneArtistWithAlbums,
};
export default controller;
