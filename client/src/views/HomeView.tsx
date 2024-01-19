import wavyLinesTop from '../assets/img/wavy-lines-top.png'
import wavyLinesBottom from '../assets/img/wavy-lines-bottom.png'

import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import Box from '@mui/material/Box'

import AboutSection from "../components/Sections/HomeView/AboutSection"
import HeroSection from "../components/Sections/HomeView/HereSection/HeroSection"
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
	return (
		<>
			<HeroSection />
			
			<Box position={"relative"} zIndex={1100}>
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
						<Container sx={{ padding: '30px 0 0 0' }}>
							<AboutSection />
						</Container>
					</Box>

					<Container>
						<CustomDivider/>
						
						<WhatWeDoSection />

						<CustomDivider my={5} />

						<WhyChooseUsSection />

						<CustomDivider mt={1} mb={4} />
					</Container>

					<ManufactoringSection />

					<Container>
						<CustomDivider mt={4} mb={4} />
						<NumbersSection />
						<CustomDivider mt={8} mb={8} />
						<WhyTrustUsSection />
						<CustomDivider mt={5} mb={5} />
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