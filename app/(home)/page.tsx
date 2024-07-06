import Divider from "@/components/Common/Divider";
import OurClientsSection from "@/components/Pages/Home/Sections/OurClients/OurClientsSection";
import WhatWeDoSection from "@/components/Pages/Home/Sections/WhatWeDo/WhatWeDoSection";
import WhoWeAreSection from "@/components/Pages/Home/Sections/WhoWeAre/WhoWeAreSection";
import WhyChooseUsSection from "@/components/Pages/Home/Sections/WhyChooseUs/WhyChooseUsSection";
import WhyTrustUsSection from "@/components/Pages/Home/Sections/WhyTrustUs/WhyTrustUsSection";
import { Metadata } from "next";


export const metadata: Metadata = {
	title: "Stitch Sense | Home",
	description: "Your go-to wholesaler for fashion design, sublimation, production, and distribution of top-quality clothing, catering to customers worldwide."
};

export default function Home() {
	return (
		<>
			<WhoWeAreSection />

			<Divider />

			<WhatWeDoSection />

			<Divider />

			<WhyChooseUsSection />

			<Divider />

			<WhyTrustUsSection />

			<Divider />

			<OurClientsSection />
		</>
	);
}
