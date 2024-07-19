import Header from "@/components/Header/Header";
import PageTitleSection from "@/components/Common/PageTitleSection";
import Main from "@/components/Common/Main";

export default function RestLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />

			<PageTitleSection />

			<Main>
				{children}
			</Main>
		</>
	);
}
