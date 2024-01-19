import contactBackgroundImg from '/assets/img/title-backgrounds/contact-background.jpg'
import isTitledView from '../HOC/isTitledView';
import ContactContent from '../components/Sections/ContactUsView/ContactContent';
import ContactForm from '../components/Sections/ContactUsView/ContactForm';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



function ContactUsView() {

	return (
		<Container>
			<Box my={10}>
				<ContactContent />

				<ContactForm />
			</Box>

		</Container>
	)
}

export default isTitledView(ContactUsView,
	{
		viewTitle: "Contact Us",
		imageSrc: contactBackgroundImg,
	}
)