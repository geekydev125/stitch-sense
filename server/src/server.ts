import express, { Application } from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import logger from 'morgan/index.js'
import router from './router/router.js';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app: Application = express()

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname + '/public')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(logger('dev'))
app.use(cors({
   origin: ['http://localhost:5173', 'http://stitch-sense.vercel.app'],
   methods: ['POST', 'GET']
}));

app.use(cors())

app.use("/api", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))