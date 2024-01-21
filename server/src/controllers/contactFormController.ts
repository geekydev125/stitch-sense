import { Router, Request, Response } from 'express'

const router = Router();

router.post('/', (req:Request, res: Response) => {
    const {firstName, lastName, phone, email, contactMethod, message } = req.body;

    console.log(req.body);

})

export default router;