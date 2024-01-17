import contactBackgroundImg from '/assets/img/contact-background.jpg'
import isTitledView from '../HOC/isTitledView';
import ContactForm from '../components/ContactForm';

function ContactUsView() {


	return (
		<>
			<ContactForm />

			
		</>
	)
}

export default isTitledView(ContactUsView,
	{
		viewTitle: "Contact Us",
		imageSrc: contactBackgroundImg,
	}
)