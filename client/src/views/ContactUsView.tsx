import contactBackgroundSmallScreen from '../assets/img/title-backgrounds/contact-background-small-screen.jpg'
import contactBackgroundLargeScreen from '../assets/img/title-backgrounds/contact-background-large-screen.jpg'

import isTitledView from '../HOC/isTitledView';
import ContactForm from '../components/Sections/ContactUsView/ContactForm';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import SectionTitle from '../components/SectionTitle';

function ContactUsView() {

	return (
		<Container>
			<Box my={{ xs: 5, md: 5 }}>
				<SectionTitle title="LET'S WORK TOGETHER!" mb={4} />

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