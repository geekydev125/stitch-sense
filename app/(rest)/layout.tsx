import Header from "@/components/Header/Header";
import PageTitleSection from "@/components/Common/PageTitleSection";
import Main from "@/components/Common/Main";
import Footer from "@/components/Footer/Footer";

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

			<Footer />
		</>
	);
}
