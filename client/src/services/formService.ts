import { FormData } from '../components/Sections/ContactUsView/ContactForm'

const baseUrl = 'http://localhost:3000/api/contact'
// const baseUrl = 'https://stitch-sense.vercel.app/api'
// const baseUrl = 'http://stitch-sense.vercel.app/api'

export const submit = (formData: FormData) => fetch(`${baseUrl}/form`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
})