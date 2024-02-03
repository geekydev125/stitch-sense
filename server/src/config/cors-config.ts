let allowedOrigins: string[] | [];

if (process.env.NODE_ENV === 'development') {
    allowedOrigins = ['http://localhost:5173', 'http://localhost:3000/', 'http://stitch-sense.vercel.app'];
} else {
    allowedOrigins = ['https://stitch-sense.onrender.com'];
}

export default allowedOrigins;