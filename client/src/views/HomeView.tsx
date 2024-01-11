import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import AboutSection from "../components/Sections/AboutSection"
import HeroSection from "../components/Sections/HeroSection"
import WhatWeDoSection from "../components/Sections/WhatWeDoSection"
import NumbersSection from "../components/Sections/NumbersSection"
import WhyChooseUsSection from "../components/Sections/WhyChooseUsSection"
import WhyTrustUsSection from "../components/Sections/WhyTrustUsSection"

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

				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam ipsam earum vero unde sunt delectus nihil similique vitae. Iste nemo ut sed officiis fuga doloremque dolorem, sint ex nam.
			</Container>
		</>
	)
}

export default HomeView