import contactBackgroundImg from '/assets/img/contact-background.jpg'
import isTitledView from '../HOC/isTitledView';
import ContactForm from '../components/ContactForm';
import SectionTitle from '../components/SectionTitle';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomDivider from '../components/CustomDivider';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

function ContactUsView() {


	return (
		<Container>
			<Stack mt={10} mb={7} display='flex' direction='column' alignItems='center'>

				<SectionTitle title='LET"S WORK TOGETHER!' />
				<Typography variant="h4" component='p' mt={3} textAlign='center' color='custom.theme.darkGray'>
					Do you want to be part of our dream team?
				</Typography>
				<Typography variant="body1" component='p' textAlign='center' color='custom.theme.darkGray'>
					There’s no need to wait, you can get in touch with us today and we can make it happen!
				</Typography>

				<CustomDivider my={4} />

				<Typography variant="body1" component='p' textAlign='center' color='custom.theme.darkGray'>
					You can get in touch with us <b>RIGHT AWAY!</b>
				</Typography>

				<Box py={2} px={15} mx={5} mt={2}
					sx={{
						backgroundColor: 'custom.theme.darkGray',
						borderRadius: 5
					}}>
					<Typography variant="h4" component='p' textAlign='center' color='custom.theme.almostWhite'>
						CALL <b>+(359) 888 81 11 32</b>
					</Typography>
					<Typography variant="h6" component='p' textAlign='center' color='custom.theme.almostWhite'>
						for Ganimir Vangelov (Chief Operations Officer)
					</Typography>
				</Box>

				<CustomDivider my={4} />

				<Typography variant="h5" component='p' textAlign='center' color='custom.theme.darkGray'>
					Otherwise, fill out the form below.
				</Typography>
				<Typography variant="body1" component='p' textAlign='center' color='custom.theme.darkGray'>
					We respond to all of our inquiries within <b>1 BUSINESS DAY.</b>
				</Typography>

				<ContactForm />


			</Stack>
		</Container>
	)
}

export default isTitledView(ContactUsView,
	{
		viewTitle: "Contact Us",
		imageSrc: contactBackgroundImg,
	}
)