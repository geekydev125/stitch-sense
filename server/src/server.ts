import express, { Application } from 'express'
import logger from 'morgan/index.js'
import router from './router/router';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app: Application = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors());

app.use("/api", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))