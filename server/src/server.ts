import express, { Application, Request, Response } from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import logger from 'morgan/index.js'
import router from './router/router.js';
import cors from 'cors';
import allowedOrigins from './config/cors-config.js';
import * as env from 'dotenv'

const PORT = process.env.PORT || 3000;

const app: Application = express()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname + '/public')))

if (process.env.NODE_ENV === 'development') {
   env.config()
   app.use(logger('dev'))
} 

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(cors({
   origin: allowedOrigins,
   methods: 'GET'
}));

app.use("/api", router);

app.get('*', (req: Request, res: Response) => {
   res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))