import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "../globals.css";

import Header from "@/components/Header/Header";
import HeroSection from "@/components/Pages/Home/Sections/Hero/HeroSection";
import Footer from "@/components/Footer/Footer";
import Main from "@/components/Common/Main";

const groteskFont = Space_Grotesk({ subsets: ["latin"] });

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
		<html lang="en">

			<body className={groteskFont.className}>
				<NextTopLoader
					color="#35908d"
					height={3}
					initialPosition={0.08}
					crawlSpeed={200}
					crawl={true}
					showSpinner={false}
					easing="ease"
					speed={200}
				/>

				<HeroSection />

				<Header />

				<Main>
					{children}
				</Main>

				<Footer />
			</body>
		</html>
	);
}
