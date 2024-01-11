import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import AboutSection from "../components/Sections/AboutSection"
import HeroSection from "../components/Sections/HeroSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"
import NumbersSection from "../components/Sections/NumbersSection"
import WhyChooseUsSection from "../components/Sections/WhyChooseUsSection"
import WhyTrustUsSection from "../components/Sections/WhyTrustUsSection"
import BottomFooter from "../components/Footer/BottomFooter"

function HomeView() {
	return (
		<>
			<HeroSection />
			<Header />

			<Container sx={{ padding: '30px 0' }}>
				<AboutSection />
				<WhatWeDoSection />
			</Container>

			<NumbersSection />

			<Container>
				<WhyChooseUsSection />
				<WhyTrustUsSection />

			</Container>

			<BottomFooter />
		</>
	)
}

export default HomeView