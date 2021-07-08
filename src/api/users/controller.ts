
import UserHandlers from "./interfaces";
import getAll from "./getAll";
import getOne from "./getOne";
import deleteOne from './delete'
import post from './post'
import put from './put'
const controller: UserHandlers = {
 getAll,
 getOne,
 put,
 post,
 deleteOne,
  };
  
  export default controller;