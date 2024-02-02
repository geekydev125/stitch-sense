import getImageUrl from '../utils/image-util';

import isTitledView from '../HOC/isTitledView';
import ContactForm from '../components/Sections/ContactUsView/ContactForm';
import Container from '@mui/material/Container';
import SectionTitle from '../components/SectionTitle';
import HelmetSEO from '../components/HelmetSEO';

import Box from '@mui/material/Box';

function ContactUsView() {
	return (
		<>
			<HelmetSEO title='Contact' description='Connect with Stitch Sense via our contact page for inquiries, collaborations, and partnerships in clothing manufacturing' />

			<Container>
				<Box my={{ xs: 5, md: 5 }}>
					<SectionTitle title="LET'S WORK TOGETHER!" mb={4} />

					<ContactForm />
				</Box>
			</Container>
		</>
	)
}

export default isTitledView(ContactUsView,
	{
		viewTitle: "Contact Us",
		imageSrcSmallScreen: getImageUrl('title-backgrounds', 'contact-background-small-screen.jpg'),
		imageSrcLargeScreen: getImageUrl('title-backgrounds', 'contact-background-large-screen.jpg'),
	}
)