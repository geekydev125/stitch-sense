import SecondaryTitle from "@/components/Common/Titles/SecondaryTitle";
import AboutSection from "@/components/Pages/About/Sections/AboutSection";
import EmployeesCards from "@/components/Pages/Home/Sections/WhyTrustUs/EmployeesCards";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Learn about Stitch Sense's story, values, and commitment to excellence in clothing manufacturing, catering to wholesalers and retailers with dedication and expertise."
};

function AboutPage() {
	return (
		<>
			<AboutSection />
			
			<SecondaryTitle>Our impact on employees</SecondaryTitle>

			<EmployeesCards />

			<SecondaryTitle>Our team</SecondaryTitle>

		</>
	)
}

export default AboutPage