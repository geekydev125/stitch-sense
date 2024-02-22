import wavyLinesTop from '../assets/img/wavy-lines-top.svg'
import wavyLinesBottom from '../assets/img/wavy-lines-bottom.svg'
import HelmetSEO from '../components/HelmetSEO'

import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import Box from '@mui/material/Box'

import WhoWeAreSection from "../components/Sections/HomeView/WhoWeAreSection"
import HeroSection from "../components/Sections/HomeView/HeroSection/HeroSection"
import WhatWeDoSection from "../components/Sections/HomeView/WhatWeDoSection"
import WhyChooseUsSection from "../components/Sections/HomeView/WhyChooseUsSection"
import WhyTrustUsSection from "../components/Sections/HomeView/WhyTrustUsSection"
import OurClientsSection from "../components/Sections/HomeView/OurClientsSection"
import CustomDivider from '../components/CustomDivider'
import ContactForm from '../components/Sections/ContactUsView/ContactForm'
import SectionTitle from '../components/SectionTitle'

function HomeView() {
	return (
		<>
			<HelmetSEO title="Home" description="Your go-to wholesaler for fashion design, sublimation, production, and distribution of top-quality clothing, catering to customers worldwide." />

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
						<Container sx={{
							paddingTop: {
								xs: '0',
								md: '30px'
							},
						}}>
							<WhoWeAreSection />
						</Container>

						<CustomDivider my={{ md: 2 }} />
					</Box>

					<Container>
						<WhatWeDoSection />

						<CustomDivider my={{ xs: 3, md: 5 }} />

					</Container>

					<WhyChooseUsSection />

					<Container>
						<CustomDivider mt={{ xs: 3, md: 5 }} mb={{ xs: 5, md: 4 }} />
						<WhyTrustUsSection />
						<CustomDivider mt={{ xs: 4, md: 5 }} mb={{ xs: 4, md: 5 }} />
					</Container>

					<OurClientsSection />

					<Box mt={5} pb={{ xs: 2, md: 3 }}>
						<Container>
							<SectionTitle title="LET'S WORK TOGETHER!" mb={4} />
							<ContactForm />
						</Container>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default HomeView