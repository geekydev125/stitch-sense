import { MutableRefObject } from 'react'

import euFlag from '../../../assets/img/eu-flag-transparent.png'

import SectionTitle from '../../SectionTitle'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"


interface Props {
	aboutSectionRef: MutableRefObject<HTMLDivElement | null>
}

function AboutSection({
	aboutSectionRef
}: Props) {
	return (
		<>
			<Box ref={aboutSectionRef}>
				<SectionTitle title='ABOUT US' mt={4} mb={0} p={2} />
				<Box p={3}>
					<Box
						sx={{
							background: `url(${euFlag}) no-repeat`,
							backgroundSize: 'contain',
							backgroundPosition: 'left center',
						}}
					>
						<Typography variant='body1' component='p' mb={5} pl={{ md: 25 }} textAlign='justify' >
							We are a clothing manufacturer with more than 10 years of experience in the fashion industry. 
						</Typography>

						<Typography variant='body1' component='p' mb={5} pl={{ md: 25 }} textAlign='justify'>
							As a white-label provider, we cater to diverse retail levels, from mass to specialty, department stores, off-price retailers, and e-commerce platforms. Our emphasis lies in swift market delivery and direct-to-consumer approaches.
						</Typography>

						<Typography variant='body1' component='p' pl={{ md: 25 }} pb={2} textAlign='justify'>
							We are European-based and have our own successful clothing brands like <b>CandyCatz</b>, <b>Badinka</b>, and <b>RaveKitties</b>, all of which have been creating fashion for our satisfied customers for more than 10 years.
						</Typography>
					</Box>
				</Box>
			</Box>

		</>
	)
}

export default AboutSection