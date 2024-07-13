"use client"
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import contactFormSchema from '@/validations/contactFormSchema'
import InputFieldWithErrorMessage from './InputFieldWithErrorMessage'

export interface IContactFormData {
	firstName: string,
	lastName: string,
	phone: string,
	email: string,
	contactMethod: "phone" | "email" | "phoneAndEmail",
	message?: string
}


function ContactForm() {
	const { register, handleSubmit, formState: { errors, isDirty, isLoading, isValid, isSubmitting } } = useForm<IContactFormData>({
		mode: 'onBlur',
		resolver: yupResolver(contactFormSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			phone: '',
			email: '',
			contactMethod: 'phoneAndEmail'
		}
	})

	function onSubmit(data: IContactFormData) {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='bg-light p-5 rounded-2xl'>
			<div className='flex gap-x-4 mb-2'>
				<InputFieldWithErrorMessage errors={errors} register={register} name='firstName' required placeholder="First Name" />
				<InputFieldWithErrorMessage errors={errors} register={register} name='lastName' required placeholder="Last Name" />
			</div>
			<div className='flex gap-x-4 mb-2'>
				<InputFieldWithErrorMessage errors={errors} register={register} name='phone' required placeholder="Phone Number" />
				<InputFieldWithErrorMessage errors={errors} register={register} name='email' required placeholder="Email" />
			</div>
		</form>
	)
}

export default ContactForm