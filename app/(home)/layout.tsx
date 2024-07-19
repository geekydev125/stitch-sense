import type { Metadata } from "next";
import "../globals.css";

import Header from "@/components/Header/Header";
import HeroSection from "@/components/Pages/Home/Sections/Hero/HeroSection";
import Main from "@/components/Common/Main";
import RootLayoutWrapper from "@/components/Common/RootLayoutWrapper";

export const metadata: Metadata = {
	title: {
		default: "Stitch Sense",
		template: "Stitch Sense | %s",
	},
	description: "Your go-to wholesaler for fashion design, sublimation, production, and distribution of top-quality clothing, catering to customers worldwide.",
};

export default function HomeRootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<RootLayoutWrapper>
			<HeroSection />

			<Header />

			<Main>
				{children}
			</Main>
		</RootLayoutWrapper>
	);
}
