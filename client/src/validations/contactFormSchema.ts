import * as yup from 'yup';
import { LATIN_CHARACTERS_REGEX } from '../utils/regex';

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
        .required('Phone Number is required'),
    email: yup
        .string()
        .required(),
    message: yup
        .string()
        .required()
}

const contactFormSchema = yup.object().shape(contactFormSchemaShape)

export default contactFormSchema;