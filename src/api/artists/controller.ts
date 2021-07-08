import ArtistHandlers from './interfaces'
import getAll from '../artists/getAll'
import getOne from '../artists/getOne'
import post from "./post"
import deleteOne from './delete'
import put from './put'

const controller : ArtistHandlers = {
getAll,
post,put,deleteOne,getOne,
}

export default controller   