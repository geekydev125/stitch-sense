import SectionTitle from "@/components/Common/Titles/SectionTitle"
import ContactForm from "@/components/Forms/ContactForm"

function ContactSection() {
	return (
		<section className="container">
			<SectionTitle>Let's work together!</SectionTitle>

			<ContactForm />
		</section>
	)
}

export default ContactSection