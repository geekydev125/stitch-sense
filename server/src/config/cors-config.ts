import * as env from 'dotenv';
env.config();

let allowedOrigins: string[] | [];

if (process.env.NODE_ENV === 'development') {
    allowedOrigins = ['http://localhost:5173'];
} else {
    allowedOrigins = ['https://www.stitch-sense.com'];
}

export default allowedOrigins;