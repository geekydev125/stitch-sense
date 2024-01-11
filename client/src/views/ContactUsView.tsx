import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import contactFormSchema from '../validations/contactFormSchema';


interface FormData {
	firstName: string,
	lastName: string,
	phone: string,
	email: string,
	message: string
}

function ContactUsView() {
	const { register, handleSubmit, formState: { errors, isDirty, isValid }} = useForm<FormData>({
		mode: 'onBlur',
		resolver: yupResolver(contactFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			message: ''
		}

	})

	const onFormSubmit = () => {
		console.log('submit');
	}

	return (
		<>
		<form onSubmit={handleSubmit(onFormSubmit)}>


			
		</form>
		
		</>
	)
}

export default ContactUsView