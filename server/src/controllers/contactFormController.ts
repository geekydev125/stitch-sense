import { Router, Request, Response } from 'express'

const router = Router();

router.post('/form', (req:Request, res: Response) => {
    const {firstName, lastName, phone, email, contactMethod, message } = req.body;

    console.log(firstName, lastName, phone, email, contactMethod, message );

})

export default router;