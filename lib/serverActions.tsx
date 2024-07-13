"use server"
import nodemailer from 'nodemailer'
import { ObjectSchema } from "yup";

import { IContactFormData } from "@/components/Forms/ContactForm";
import contactFormSchema from "@/validations/contactFormSchema";

export const sendContactMessage = async (formData: IContactFormData) => {

    const body: IContactFormData = formData;

    try {
        await (contactFormSchema as ObjectSchema<IContactFormData>).camelCase().validate(body, {
            abortEarly: false,
            strict: true
        });

        const { firstName, lastName, phone, email, contactMethod, message } = body;
        let contactMethodText;

        switch (contactMethod) {
            case 'phone':
                contactMethodText = 'Phone'
                break;
            case 'email':
                contactMethodText = 'Email'
                break;
            case 'phoneAndEmail':
                contactMethodText = 'Phone AND/OR Email'
                break;
            default:
                return contactMethod
        }

        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            host: process.env.EMAIL_HOST,
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

        const output = `
            <h2>You have a new form submission on Stitch Sense!</h2>
            <h3>Submission Details</h3>
            <ul>
                <li><b>Name:</b> ${firstName} ${lastName}</li>
                <li><b>Phone number:</b> ${phone}</li>
                <li><b>Email address:</b> ${email}</li>
                <li><b>Preferred contact method:</b> ${contactMethodText}</li>
                <li><b>Message:</b> ${message}</li>
            </ul>
        `;

        const options = {
            from: `Stitch Sense <${process.env.EMAIL_FROM}>`,
            to: process.env.EMAIL_TO,
            subject: 'Stitch Sense form submission',
            text: 'Stitch Sense form submission',
            html: output,
        }

        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        const info = await transporter.sendMail(options);

        if (info) {
            console.log(`Message sent successfully: %s ${info.messageId}`);
            return { ok: true, message: `Message sent successfully!` };
        } else {
            throw new Error("An error occurred while attempting to process your message");
        }
    } catch (error) {
        console.log('error:', error)
        throw error;
    }
}