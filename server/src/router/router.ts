import { Router } from 'express'

import formController from '../controllers/formController';

const router = Router()

router.use('/form', formController)

export default router;