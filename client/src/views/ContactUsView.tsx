import contactBackgroundSmallScreen from '/assets/img/title-backgrounds/contact-background-small-screen.jpg'
import contactBackgroundLargeScreen from '/assets/img/title-backgrounds/contact-background-large-screen.jpg'

import isTitledView from '../HOC/isTitledView';
import ContactContent from '../components/Sections/ContactUsView/ContactContent';
import ContactForm from '../components/Sections/ContactUsView/ContactForm';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';

function ContactUsView() {

	return (
		<Container>
			<Box my={{xs: 5, md: 10}}>
				<ContactContent />

				<ContactForm />
			</Box>

		</Container>
	)
}

export default isTitledView(ContactUsView,
	{
		viewTitle: "Contact Us",
		imageSrcSmallScreen: contactBackgroundSmallScreen,
		imageSrcLargeScreen: contactBackgroundLargeScreen
	}
)