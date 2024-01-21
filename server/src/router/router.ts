import { Router } from 'express'

import contactFormController from '../controllers/contactFormController';

const router = Router()

router.use('/contact', contactFormController)

export default router;