import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import AboutSection from "../components/Sections/AboutSection"
import HeroSection from "../components/Sections/HeroSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"

function HomeView() {
	return (
		<>
			<HeroSection />
			<Header />

			<Container sx={{ padding: '30px 0' }}>
				<AboutSection />
				<WhatWeDoSection />
			</Container>
		</>
	)
}

export default HomeView