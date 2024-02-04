import { Request, Response, Router } from "express";


const router:Router = Router()

router.get('/', (req: Request, res: Response) => {
    const mapApiKey = process.env.GOOGLE_MAPS_API_KEY

    res.status(200).json({ mapApiKey })
})



export default router;