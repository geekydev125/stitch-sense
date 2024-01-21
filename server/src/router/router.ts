import { Router } from 'express'

import contactFormController from '../controllers/contactFormController.js';

const router = Router()

router.use('/contact', contactFormController)

export default router;