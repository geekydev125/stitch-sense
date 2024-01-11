import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import contactFormSchema from '../validations/contactFormSchema';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface FormData {
	firstName: string,
	lastName: string,
	phone: string,
	email: string,
	message?: string
}

function ContactUsView() {
	const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<FormData>({
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

	const onFormSubmit:SubmitHandler<FormData> = (data, e):void => {
		e?.preventDefault();

		console.log(data);
	}

	return (
		<Box mt={5} px={5}>
			<Container>
				<form onSubmit={handleSubmit(onFormSubmit)}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6} display='flex' justifyContent='center'>
							<TextField
								required
								fullWidth
								autoComplete='on'
								id='first-name'
								label="First Name"
								size='small'
								{...register('firstName')}
								error={errors.firstName ? true : false}
								helperText={errors.firstName ? errors.firstName.message : ''}
							/>
						</Grid>
						<Grid item xs={12} md={6} display='flex' justifyContent='center'>
							<TextField
								required
								fullWidth
								autoComplete='on'
								id='last-name'
								label="Last Name"
								size='small'
								{...register('lastName')}
								error={errors.lastName ? true : false}
								helperText={errors.lastName ? errors.lastName.message : ''}
							/>
						</Grid>
						<Grid item xs={12} md={6} display='flex' justifyContent='center'>
							<TextField
								required
								fullWidth
								autoComplete='on'
								id='phone'
								label="Phone Number"
								size='small'
								{...register('phone')}
								error={errors.phone ? true : false}
								helperText={errors.phone ? errors.phone.message : ''}
							/>

						</Grid>
						<Grid item xs={12} md={6} display='flex' justifyContent='center'>
							<TextField
								required
								fullWidth
								autoComplete='on'
								id='email'
								label="Email Address"
								size='small'
								{...register('email')}
								error={errors.email ? true : false}
								helperText={errors.email ? errors.email.message : ''}
							/>
						</Grid>
						<Grid item xs={12} display='flex' justifyContent='center'>
							<TextField
								multiline
								rows={4}
								style={{ minWidth: '400px' }}
								fullWidth
								autoComplete='on'
								id='message'
								label="Your Message (optional)"
								size='small'
								{...register('message')}
								error={errors.message ? true : false}
								helperText={errors.message ? errors.message.message : ''}
							/>


						</Grid>
						<Grid item xs={12} display='flex' justifyContent='center'>
							<Button color='primary' type='submit' variant='contained' disabled={!(isDirty && isValid)}>SUBMIT</Button>
						</Grid>

					</Grid>
				</form>

			</Container>
		</Box>
	)
}

export default ContactUsView