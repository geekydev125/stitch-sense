import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../globals.css";

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
			<body className={groteskFont.className}>{children}</body>
		</html>
	);
}
