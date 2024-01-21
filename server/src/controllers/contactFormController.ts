import { Router, Request, Response } from 'express'
import nodemailer from 'nodemailer'
import * as env from 'dotenv'

env.config()

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const { firstName, lastName, phone, email, contactMethod, message } = req.body;

    const output = `
    <h2>You have a new form submission on Stitch Sense!</h2>
    <h3>Submission Details</h3>
    <ul>
        <li><b>Name:</b> ${firstName} ${lastName}</li>
        <li><b>Email:</b> ${email}</li>
        <li><b>Email:</b> ${phone}</li>
        <li><b>Subject:</b> ${email}</li>
        <li><b>Preferred contact mode:</b> ${contactMethod}</li>
        <li><b>Message:</b> ${message}</li>
    </ul>
`;

    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        host: 'smtp.live.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAILFROM,
            pass: process.env.PASSWORD,
        },
        from: process.env.EMAILFROM,
        tls: {
            rejectUnauthorized: false,
        },
    });

    const options = {
        from: `Stitch Sense <${process.env.EMAILFROM}>`,
        to: process.env.EMAILTO,
        subject: 'Stitch Sense form submission',
        text: 'Stitch Sense form submission',
        html: output,
    }

    const info = await transporter.sendMail(options);

    transporter.verify(function (err, success) {
        if (err) {
            res.status(500).send({ message: 'An error occurred while attempting to process your message.' })
            console.log(err);
        } else {
            console.log('Message sent: %s', info.messageId);
            res.status(200).json({ success: success })
        }
    });
})

export default router;