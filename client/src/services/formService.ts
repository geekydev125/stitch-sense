import { FormData } from '../components/Sections/ContactUsView/ContactForm'

const baseUrl = (import.meta.env.VITE_BASE_URL as string)

export const submit = (formData: FormData) => fetch(`${baseUrl}/contact`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
})