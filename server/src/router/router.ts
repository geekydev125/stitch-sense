import { Router } from 'express'

import contactFormController from '../controllers/contactFormController.js';
import googleMapController from '../controllers/googleMapController.js';

const router = Router()

router.use('/contact', contactFormController)
router.use('/google-map', googleMapController)

export default router;