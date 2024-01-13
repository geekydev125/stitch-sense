import { useRef } from 'react'

import wavyLinesTop from '/assets/img/wavy-lines-top.png'
import wavyLinesBottom from '/assets/img/wavy-lines-bottom.png'

import Container from "@mui/material/Container"
import Header from "../components/Header/Header"
import AboutSection from "../components/Sections/HomeViewSections/AboutSection"
import HeroSection from "../components/Sections/HomeViewSections/HeroSection"
import WhatWeDoSection from "../components/Sections/HomeViewSections/WhatWeDoSection"
import NumbersSection from "../components/Sections/HomeViewSections/NumbersSection"
import WhyChooseUsSection from "../components/Sections/HomeViewSections/WhyChooseUsSection"
import WhyTrustUsSection from "../components/Sections/HomeViewSections/WhyTrustUsSection"
import OurClientsSection from "../components/Sections/HomeViewSections/OurClientsSection"
import Box from '@mui/material/Box'


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
					<WhatWeDoSection />
				</Container>

				<NumbersSection />

				<Container>
					<WhyChooseUsSection />
					<WhyTrustUsSection />
				</Container>

				<OurClientsSection />

				<Container>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus non dolor, impedit facilis tenetur soluta consequuntur, itaque perspiciatis natus, harum rem libero consequatur adipisci? Animi vero voluptates saepe eligendi beatae omnis cupiditate? Expedita reprehenderit mollitia quis doloremque cumque, corporis iste voluptate. Vero dolorum quo porro omnis esse ex magnam vitae fugit error, sapiente voluptas sequi corporis impedit voluptates repellendus itaque. Necessitatibus at cum assumenda recusandae incidunt aliquam quos est saepe eos aut quasi consequatur blanditiis animi eaque, ipsam atque ad doloremque mollitia neque sit officiis. Voluptas illum reprehenderit blanditiis exercitationem eaque id alias doloremque sequi consectetur. Rem fugit id atque tempore? Adipisci tempore cumque sequi, sed beatae autem. Maxime eius cupiditate sed magnam aspernatur provident molestias accusantium error nobis amet quia ad animi nam fugiat ab, eligendi consequuntur esse officiis debitis. Ad error voluptates aperiam officiis est necessitatibus animi tempore possimus eius expedita, quia architecto quaerat corporis dignissimos tempora itaque consectetur? Eveniet sit hic est. Dolor, atque rem ea iure eveniet quis earum laboriosam architecto dolores deserunt quas quam ipsa velit ducimus in eligendi dolore reiciendis aperiam molestiae eos. A adipisci quod omnis fugiat sint. Aliquam debitis molestias minima harum quos porro dicta aspernatur corporis deserunt non sapiente, vero ratione, nisi architecto repudiandae obcaecati nemo laborum! Voluptates totam ut similique aliquid earum excepturi reiciendis, commodi omnis possimus distinctio fuga minima magni adipisci quam dolore voluptatem ipsa, corrupti officiis doloribus, labore at nemo perferendis? Recusandae eveniet corporis tempore obcaecati perferendis nesciunt repellat, nam mollitia, repellendus sapiente doloribus. Similique incidunt sed amet maxime excepturi eos numquam quidem earum quae vero labore ea doloribus provident id accusamus at totam repudiandae eius, atque quaerat repellat molestias temporibus ullam. Officiis corrupti aliquam fugiat perspiciatis quam odio quidem neque necessitatibus voluptatem, expedita nulla quae consequatur quasi ab fugit et alias sint autem praesentium explicabo labore maxime quis iure? Recusandae harum aspernatur earum soluta veritatis magni corporis provident fugit fuga quibusdam. Corporis, sint ratione. Dolorum voluptatibus dolor odio, doloremque quis esse? Quos non dolorem, labore alias sunt iure molestiae id vel aliquid similique. Culpa obcaecati, accusantium nam corrupti natus odit praesentium error quam excepturi a numquam reprehenderit in voluptatibus? Dolor, dignissimos ratione. Ipsum exercitationem ab mollitia vitae, ullam laboriosam, excepturi numquam, et sequi labore eum? Quas modi tenetur a fugit? Dicta, repellat! Harum molestias, veniam assumenda perferendis necessitatibus laudantium temporibus, minima facere, illum modi inventore. Nobis odit quibusdam officia consequatur reprehenderit sapiente! Provident temporibus iusto odit recusandae eos commodi perferendis
				</Container>
			</Box>
		</>
	)
}

export default HomeView