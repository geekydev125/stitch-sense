import type { Metadata } from "next";
import "../globals.css";

import Header from "@/components/Header/Header";
import PageTitleSection from "@/components/Common/PageTitleSection";
import Main from "@/components/Common/Main";
import RootLayoutWrapper from "@/components/Common/RootLayoutWrapper";

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
		<RootLayoutWrapper>
			<Header />

			<PageTitleSection />

			<Main>
				{children}
			</Main>

		</RootLayoutWrapper>
	);
}
