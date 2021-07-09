import post from "./post";
import getAll from "./getAll";
import SongHandlers from "./interfaces";
import put from "./put";
import getOne from "./getOne";
import deleteOne from "./delete";
const controller: SongHandlers = {
  post,
  getAll,
  getOne,
  deleteOne,
  put,
};
export default controller;
