import express, { Application } from 'express'
import logger from 'morgan/index.js'
import router from './router/router';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app: Application = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors({
   origin: [ "http://localhost:5173", "stitch-sense.vercel.app" ],
   methods: ["GET", "POST"],
   allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use("/api", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))