import contactBackgroundImg from '/assets/img/contact-background.jpg'
import isTitledView from '../HOC/isTitledView';
import ContactContent from '../components/Sections/ContactUsView/ContactContent';
import ContactForm from '../components/Sections/ContactUsView/ContactForm';
import Container from '@mui/material/Container';



function ContactUsView() {

	return (
		<Container>
			<ContactContent />

			<ContactForm />
		</Container>
	)
}

export default isTitledView(ContactUsView,
	{
		viewTitle: "Contact Us",
		imageSrc: contactBackgroundImg,
	}
)