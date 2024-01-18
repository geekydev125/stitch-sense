import { useRef } from 'react'

import wavyLinesTop from '../assets/img/wavy-lines-top.png'
import wavyLinesBottom from '../assets/img/wavy-lines-bottom.png'

import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import Box from '@mui/material/Box'

import AboutSection from "../components/Sections/HomeView/AboutSection"
import HeroSection from "../components/Sections/HomeView/HeroSection"
import WhatWeDoSection from "../components/Sections/HomeView/WhatWeDoSection"
import ManufactoringSection from "../components/Sections/HomeView/ManufactoringSection"
import WhyChooseUsSection from "../components/Sections/HomeView/WhyChooseUsSection"
import WhyTrustUsSection from "../components/Sections/HomeView/WhyTrustUsSection"
import OurClientsSection from "../components/Sections/HomeView/OurClientsSection"
import CustomDivider from '../components/CustomDivider'
import NumbersSection from '../components/Sections/HomeView/NumbersSection'
import ContactContent from '../components/Sections/ContactUsView/ContactContent'
import ContactForm from '../components/Sections/ContactUsView/ContactForm'

function HomeView() {
	const aboutSectionRef = useRef<null | HTMLDivElement>(null);

	const scrollTo = () => {
		if (aboutSectionRef.current) {
			window.scrollTo({ top: aboutSectionRef.current.offsetTop, behavior: 'smooth', })
		}
	};

	return (
		<>
			<HeroSection scrollTo={scrollTo} />
			<Box>
				<Header />

				<Box
					sx={{
						background: `url(${wavyLinesBottom})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						backgroundPosition: 'bottom left'
					}}
				>
					<Box sx={{
						background: `url(${wavyLinesTop})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						backgroundPosition: 'top'
					}}>
						<Container sx={{ padding: '30px 0' }}>
							<AboutSection aboutSectionRef={aboutSectionRef} />
						</Container>
					</Box>

					<Container>
						<CustomDivider mb={4} />

						<WhatWeDoSection />

						<CustomDivider my={10} />

						<WhyChooseUsSection />

						<CustomDivider mt={5} mb={10} />
					</Container>

					<ManufactoringSection />

					<Container>
						<CustomDivider mt={5} mb={10} />
						<NumbersSection />
						<CustomDivider mt={8} mb={8} />
						<WhyTrustUsSection />
						<CustomDivider mt={8} mb={8} />
					</Container>

					<OurClientsSection />

					<Box mt={10} pb={8}>
						<Container>
							<ContactContent isDisplayedOnView='home' />
							<ContactForm />
						</Container>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default HomeView