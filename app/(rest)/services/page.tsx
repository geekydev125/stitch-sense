import { Metadata } from 'next';

import ServicesSection from '@/components/Pages/Services/Sections/ServicesSection'

export const metadata: Metadata = {
	title: "Services",
	description: "Explore Stitch Sense's comprehensive services for top-quality fashion design, sublimation, production, and clothing distribution solutions."
};

function ServicesPage() {
	return (
		<section className="container">
			<ServicesSection />
		</section>
	)
}

export default ServicesPage