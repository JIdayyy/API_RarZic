import post from "./post";
import getAll from "./getAll";
import SongHandlers from "./interfaces";
import put from "./put";
import getAllFull from "./getAllFull";
import getOne from "./getOne";
import deleteOne from "./delete";
const controller: SongHandlers = {
  post,
  getAll,
  getAllFull,
  getOne,
  deleteOne,
  put,
};
export default controller;
