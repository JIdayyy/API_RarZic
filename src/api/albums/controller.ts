import AlbumHandlers from './interfaces'
import getAll from './getAll'
import getOne from '../albums/getOne'
import post from '../albums/post'
import deleteOne from '../users/delete'
const controller : AlbumHandlers = {
getAll,
post,
getOne,
deleteOne,
}

export default controller   