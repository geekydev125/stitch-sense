import express from 'express'

const PORT = process.env.PORT || 3000;

const app = express()

const asd = (a: number, b: number) => {
    return a + b;
}

asd(4,5)

app.listen(PORT, () => console.log('server started'))