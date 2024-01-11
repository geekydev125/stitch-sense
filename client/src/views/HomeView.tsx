import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import AboutSection from "../components/Sections/HomeViewSections/AboutSection"
import HeroSection from "../components/Sections/HomeViewSections/HeroSection"
import WhatWeDoSection from "../components/Sections/HomeViewSections/WhatWeDoSection"
import NumbersSection from "../components/Sections/HomeViewSections/NumbersSection"
import WhyChooseUsSection from "../components/Sections/HomeViewSections/WhyChooseUsSection"
import WhyTrustUsSection from "../components/Sections/HomeViewSections/WhyTrustUsSection"

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

		</>
	)
}

export default HomeView