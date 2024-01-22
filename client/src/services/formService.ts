import { FormData } from '../components/Sections/ContactUsView/ContactForm'

const baseUrl = 'http://localhost:3000/api'
// const baseUrl = 'https://stitch-sense.vercel.app/api'
// const baseUrl = 'http://stitch-sense.vercel.app/api'

export const submit = (formData: FormData) => fetch(`${baseUrl}/contact`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
})