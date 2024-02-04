import { FormData } from '../components/Sections/ContactUsView/ContactForm'
import baseUrl from '../config/base-url'

export const submit = (formData: FormData) => fetch(`${baseUrl}/contact`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
})