"use client"
import { useForm } from 'react-hook-form'
import { BaseSyntheticEvent, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import contactFormSchema from '@/validations/contactFormSchema'

import { sendContactMessage } from '@/lib/serverActions'

import InputFieldWithErrorMessage from './Components/InputFieldWithErrorMessage'
import RadioButtonsGroup from './Components/RadioButtonsGroup'
import TextAreaWithErrorMessage from './Components/TextAreaWithErrorMessage'
import SubmitButton from './Components/SubmitButton'
import MessageSentSuccess from './Components/MessageSentSuccess'

export interface IContactFormData {
	firstName: string,
	lastName: string,
	phone: string,
	email: string,
	contactMethod: "phone" | "email" | "phoneAndEmail",
	message?: string
}


function ContactForm() {
	const [messageSentSuccess, setMessageSentSuccess] = useState(false)
	const [messageSentError, setMessageSentError] = useState('')
	const { register, handleSubmit, reset, formState: { errors, isDirty, isLoading, isValid, isSubmitting } } = useForm<IContactFormData>({
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

	const onSubmit = async (formData: IContactFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
		e?.preventDefault();

		const { firstName, lastName, phone, email, contactMethod, message } = formData;

		if (firstName && lastName && phone && email && contactMethod && message) {
			await sendContactMessage(formData)
				.then(() => {
					reset()
					setMessageSentSuccess(true)
				}).catch((error:Error) => {
					setMessageSentError(error.message)
					setTimeout(() => {
						setMessageSentError('')
					}, 5000);
				})
		}
	}

	return (
		<>
			{
				messageSentSuccess
					? <MessageSentSuccess />
					: <form onSubmit={handleSubmit(onSubmit)} className='bg-light p-5 rounded-2xl'>
						<div className='flex gap-x-4 mb-2'>
							<InputFieldWithErrorMessage errors={errors} register={register} name='firstName' required placeholder="First Name" />
							<InputFieldWithErrorMessage errors={errors} register={register} name='lastName' required placeholder="Last Name" />
						</div>
						<div className='flex gap-x-4 mb-2'>
							<InputFieldWithErrorMessage errors={errors} register={register} name='phone' required placeholder="Phone Number" />
							<InputFieldWithErrorMessage errors={errors} register={register} name='email' required placeholder="Email" />
						</div>

						<div className='flex flex-col items-center mb-5'>
							<RadioButtonsGroup required register={register} />
						</div>

						<TextAreaWithErrorMessage errors={errors} register={register} name='message' placeholder="Message" />

						{messageSentError && <p className='text-red-500 text-center mb-4'>{messageSentError}</p>}

						<div className='flex justify-center'>
							<SubmitButton
								isDisabled={!isValid || !isDirty || isSubmitting}
								isLoading={isLoading}
							>
								Send
							</SubmitButton>
						</div>

						
					</form>
			}
		</>
	)
}

export default ContactForm