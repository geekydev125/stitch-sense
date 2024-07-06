import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageTitleSection from "@/components/Common/PageTitleSection";

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
				<Header />

				<main className="pb-5 md:pb-10">
					<PageTitleSection />
					{children}
				</main>

				<Footer />
			</body>
		</html>
	);
}
