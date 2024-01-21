import * as yup from 'yup';
import { LATIN_CHARACTERS_REGEX, PHONE_PATTERN_REGEX } from '../utils/regex';

export const contactFormSchemaShape = {
    firstName: yup
        .string()
        .required('First Name is required')
        .matches(LATIN_CHARACTERS_REGEX, 'Only characters from the latin alphabet are allowed')
        .min(2, "First Name should be at least 2 characters long")
        .max(40, "First Name should be at most 40 characters long"),
    lastName: yup
        .string()
        .required('Last Name is required')
        .matches(LATIN_CHARACTERS_REGEX, 'Only characters from the latin alphabet are allowed')
        .min(2, "Last Name should be at least 2 characters long")
        .max(40, "Last Name should be at most 40 characters long"),
    phone: yup
        .string()
        .required('Phone Number is required')
        .matches(PHONE_PATTERN_REGEX, 'The input should be a valid phone number')
        .min(6, "Phone number should be at least 6 characters long")
        .max(14, "Phone number should be at most 14 characters long"),
    email: yup
        .string()
        .required('Email is required')
        .email('Input should be an e-mail address in a valid format'),
    contactMethod: yup
        .string()
        .required('Contact Method is required')
        .oneOf(['phone', 'email', 'phoneAndEmail'], 'Input should be a valid contact method'),
    message: yup
        .string()
}

const contactFormSchema = yup.object().shape(contactFormSchemaShape)

export default contactFormSchema;