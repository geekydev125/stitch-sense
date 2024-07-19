import { Metadata } from "next";

import Divider from "@/components/Common/Divider";
import ContactSection from "@/components/Pages/Common/Sections/Contact/ContactSection";
import OurClientsSection from "@/components/Pages/Home/Sections/OurClients/OurClientsSection";
import WhatWeDoSection from "@/components/Pages/Home/Sections/WhatWeDo/WhatWeDoSection";
import WhoWeAreSection from "@/components/Pages/Home/Sections/WhoWeAre/WhoWeAreSection";
import WhyChooseUsSection from "@/components/Pages/Home/Sections/WhyChooseUs/WhyChooseUsSection";
import WhyTrustUsSection from "@/components/Pages/Home/Sections/WhyTrustUs/WhyTrustUsSection";


export const metadata: Metadata = {
	title: "Stitch Sense | Home",
	description: "Your go-to wholesaler for fashion design, sublimation, production, and distribution of top-quality clothing, catering to customers worldwide."
};

export default function Home() {
	return (
		<>
			<WhoWeAreSection />

			<Divider className="my-5 sm:my-7 lg:my-10" />

			<WhatWeDoSection />

			<Divider className="my-5 sm:my-7 lg:my-10" />

			<WhyChooseUsSection />

			<Divider className="my-5 sm:my-7 lg:my-10" />

			<WhyTrustUsSection />

			<Divider className="my-5 sm:my-7 lg:my-10" />

			<OurClientsSection />
			
			<ContactSection />
		</>
	);
}
