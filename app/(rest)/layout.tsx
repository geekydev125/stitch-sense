import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "../globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageTitleSection from "@/components/Common/PageTitleSection";
import Main from "@/components/Common/Main";

const groteskFont = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Stitch Sense",
		template: "Stitch Sense | %s",
	},
};

export default function RootLayout({
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
				<Header />

				<PageTitleSection />

				<Main>
					{children}
				</Main>

				<Footer />
			</body>
		</html>
	);
}
