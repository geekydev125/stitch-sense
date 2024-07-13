import ContactForm from "@/components/Forms/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "Connect with Stitch Sense via our contact page for inquiries, collaborations, and partnerships in clothing manufacturing"
};

function ContactPage() {
	return (
		<section className="container">
			<ContactForm />
		</section>
	)
}

export default ContactPage