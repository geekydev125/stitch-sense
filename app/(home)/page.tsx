import Divider from "@/components/Common/Divider";
import WhoWeAreSection from "@/components/Pages/Home/Sections/WhoWeAre/WhoWeAreSection";
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

		</>
	);
}
