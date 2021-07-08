import AlbumHandlers from './interfaces'
import getAll from './getAll'
import put from './put'
import getOne from '../albums/getOne'
import post from '../albums/post'
import deleteOne from '../users/delete'
const controller : AlbumHandlers = {
getAll,
post,
getOne,
deleteOne,
put,
}

export default controller   