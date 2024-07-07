import CallToAction from "@/components/Common/CallToAction";
import Divider from "@/components/Common/Divider";
import PortfolioSection from "@/components/Pages/Portfolio/Sections/PortfolioSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Explore Stitch Sense's captivating portfolio showcasing our exquisite designs, production prowess, and distribution excellence, curated for customers worldwide."
};

function PortfolioPage() {
	return (
		<>
			<Divider />

			<PortfolioSection />

			<Divider />

			<CallToAction />
		</>
	)
}

export default PortfolioPage