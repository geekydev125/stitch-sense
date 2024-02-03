"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer_1 = __importDefault(require("nodemailer"));
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    let { firstName, lastName, phone, email, contactMethod, message } = req.body;
    switch (contactMethod) {
        case 'phone':
            contactMethod = 'Phone';
            break;
        case 'email':
            contactMethod = 'Email';
            break;
        case 'phoneAndEmail':
            contactMethod = 'Phone AND/OR Email';
            break;
        default:
            return contactMethod;
    }
    const output = `
    <h2>You have a new form submission on Stitch Sense!</h2>
    <h3>Submission Details</h3>
    <ul>
        <li><b>Name:</b> ${firstName} ${lastName}</li>
        <li><b>Phone number:</b> ${phone}</li>
        <li><b>Email address:</b> ${email}</li>
        <li><b>Preferred contact method:</b> ${contactMethod}</li>
        <li><b>Message:</b> ${message}</li>
    </ul>
`;
    const transporter = nodemailer_1.default.createTransport({
        service: 'hotmail',
        host: 'smtp.live.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.PASSWORD,
        },
        from: process.env.EMAIL_FROM,
        tls: {
            rejectUnauthorized: false,
        },
    });
    const options = {
        from: `Stitch Sense <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: 'Stitch Sense form submission',
        text: 'Stitch Sense form submission',
        html: output,
    };
    const info = await transporter.sendMail(options);
    transporter.verify(function (err, success) {
        if (err) {
            res.status(500).send({ message: 'An error occurred while attempting to process your message.' });
            console.log(err);
        }
        else {
            console.log('Message sent: %s', info.messageId);
            res.status(200).json({ success: success });
        }
    });
});
exports.default = router;
//# sourceMappingURL=contactFormController.js.map