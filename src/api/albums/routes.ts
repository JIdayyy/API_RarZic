import {Router} from 'express'
import controller from './controller';
const router = Router()


router.get("/", controller.getAll);
router.get('/:id', controller.getOne)
router.post('/',controller.post)


export default router