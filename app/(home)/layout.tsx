import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";

const groteskFont = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Stitch Sense",
		template: "Stitch Sense | %s",
	},
	description: "Your go-to wholesaler for fashion design, sublimation, production, and distribution of top-quality clothing, catering to customers worldwide.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={groteskFont.className}>{children}</body>
		</html>
	);
}
