import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import AboutSection from "../components/Sections/AboutSection"
import HeroSection from "../components/Sections/HeroSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"
import NumbersSection from "../components/Sections/NumbersSection"

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
		</>
	)
}

export default HomeView