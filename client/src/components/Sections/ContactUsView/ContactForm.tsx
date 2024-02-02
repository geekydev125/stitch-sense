import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import contactFormSchema from '../../../validations/contactFormSchema';
import GreenButton from '../../GreenButton';
import * as formService from '../../../services/formService'

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';


const fieldStyles = {
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'custom.theme.darkGray',
    borderRadius: '7px',
    color: 'custom.theme.darkGray'
}

export interface FormData {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    contactMethod: "phone" | "email" | "phoneAndEmail",
    message?: string
}

function ContactForm() {
    const [submittedSuccessfully, setSubmittedSuccessfully] = useState<boolean>(false);
    const [submissionError, setSubmissionError] = useState<string>('');

    const { register, handleSubmit, formState: { errors, isDirty, isValid }, watch } = useForm<FormData>({
        mode: 'onBlur',
        resolver: yupResolver(contactFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            contactMethod: 'phoneAndEmail',
            message: ''
        }
    })

    const contactMethod = watch('contactMethod');

    const onFormSubmit: SubmitHandler<FormData> = (formData: FormData, e): void => {
        e?.preventDefault();

        const { firstName, lastName, phone, email, contactMethod, message }: FormData = formData;

        formService.submit({ firstName, lastName, phone, email, contactMethod, message })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                if (data.success) {
                    setSubmittedSuccessfully(true)
                }
            })
            .catch(err => {
                console.log(err.message);
                
                setSubmissionError("An unexpected error has occurred and we are unable to process your request. Please try again later.");
                setTimeout(() => setSubmissionError(''), 5000);
            })
    }

    return (
        <Box my={5} px={{ xs: 0, md: 5 }} component='section'>
            <Container sx={{ backgroundColor: 'custom.theme.almostWhite', borderRadius: 5 }}>
                {
                    submittedSuccessfully ? (
                        <Box py={5} px={{ xs: 0, md: 5 }}>
                            <Typography variant='h4' component='p' textAlign='center' mb={2} color={'custom.theme.darkGreen'}> Thank you for your submission!</Typography>
                            <Typography variant='body1' component='p' textAlign='center' color={'custom.theme.darkGray'} >Your details have been sent to Stitch Sense.</Typography>
                            <Typography variant='body1' component='p' textAlign='center' color={'custom.theme.darkGray'}>A representative will get in touch with you soon via your preferred contact method.</Typography>
                        </Box>
                    ) : (
                        <form onSubmit={handleSubmit(onFormSubmit)}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} display='flex' justifyContent='center'>
                                    <TextField
                                        sx={fieldStyles}
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
                                        sx={fieldStyles}
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
                                        sx={fieldStyles}
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
                                        sx={fieldStyles}
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
                                    <FormControl required >
                                        <FormLabel id="contact-preference-radio-buttons">I prefer to be contacted over:</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="contact-preference-radio-buttons"
                                            name="row-radio-buttons-group"
                                            value={contactMethod}
                                        >
                                            <FormControlLabel
                                                value="phone"
                                                control={<Radio sx={{
                                                    color: 'custom.theme.darkGray',
                                                    '&.Mui-checked': {
                                                        color: 'custom.theme.darkGray',
                                                    },
                                                }} />}
                                                label="Phone"
                                                {...register('contactMethod')}
                                            />
                                            <FormControlLabel
                                                value="email"
                                                control={<Radio sx={{
                                                    color: 'custom.theme.darkGray',
                                                    '&.Mui-checked': {
                                                        color: 'custom.theme.darkGray',
                                                    },
                                                }} />}
                                                label="Email"
                                                {...register('contactMethod')}
                                            />
                                            <FormControlLabel
                                                value="phoneAndEmail"
                                                control={<Radio sx={{
                                                    color: 'custom.theme.darkGray',
                                                    '&.Mui-checked': {
                                                        color: 'custom.theme.darkGray',
                                                    },
                                                }} />}
                                                label="Phone AND/OR Email"
                                                {...register('contactMethod')}
                                            />

                                        </RadioGroup>
                                    </FormControl>


                                </Grid>

                                <Grid item xs={12} display='flex' justifyContent='center'>
                                    <TextField
                                        sx={fieldStyles}
                                        multiline
                                        rows={4}
                                        style={{ minWidth: '200px', flexGrow: 1 }}
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
                                <Grid item xs={12} display='flex' justifyContent='center' alignItems='center' height='auto' mb={5}>
                                    {submissionError && <Typography mb={2} variant='body1' component='p' textAlign='center' color='error'>{submissionError}</Typography>}
                                    <GreenButton boxShadow type='submit' variant='contained' disabled={!(isDirty && isValid)}>SEND</GreenButton>
                                </Grid>
                            </Grid>
                        </form>
                    )
                }
            </Container>
        </Box>
    )
}

export default ContactForm