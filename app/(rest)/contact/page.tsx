import { Metadata } from "next";

import ContactSection from "@/components/Pages/Common/Sections/Contact/ContactSection";

export const metadata: Metadata = {
	title: "Contact",
	description: "Connect with Stitch Sense via our contact page for inquiries, collaborations, and partnerships in clothing manufacturing"
};

function ContactPage() {
	return (
		<ContactSection />
	)
}

export default ContactPage