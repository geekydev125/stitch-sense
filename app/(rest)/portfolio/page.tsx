import { Metadata } from "next";

import CallToAction from "@/components/Common/CallToAction";
import Divider from "@/components/Common/Divider";
import PortfolioSection from "@/components/Pages/Portfolio/Sections/PortfolioSection";

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Explore Stitch Sense's captivating portfolio showcasing our exquisite designs, production prowess, and distribution excellence, curated for customers worldwide."
};

function PortfolioPage() {
	return (
		<>
			<Divider className="mb-5 sm:mb-7 lg:mb-10"/>

			<PortfolioSection />

			<Divider className="my-5 sm:my-7 lg:my-10"/>

			<CallToAction />
		</>
	)
}

export default PortfolioPage