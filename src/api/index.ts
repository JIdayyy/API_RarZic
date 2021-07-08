import { Router } from "express";
import users from '../api/users/routes'
import albums from '../api/albums/routes'
import artists from './artists/routes'


const router = Router()
router.use("/users", users)
router.use("/albums", albums)
router.use('/artists', artists)
export default router