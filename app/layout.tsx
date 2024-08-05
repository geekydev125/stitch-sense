import type { Metadata } from "next";
import "./globals.css";

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
			{children}

		</RootLayoutWrapper>
	);
}
