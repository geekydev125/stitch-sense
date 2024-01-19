import euFlag from '../../../assets/img/logos/eu-flag-transparent.png'

import SectionTitle from '../../SectionTitle'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function AboutSection() {
	return (
		<>
			<Box id='about-section'>
				<SectionTitle title='ABOUT US' mt={4} mb={2} p={2} />
				<Box p={3}>
					<Box
						sx={{
							background: `url(${euFlag}) no-repeat`,
							backgroundSize: 'contain',
							backgroundPosition: 'left center',
						}}
					>
						<Typography variant='body1' component='p' pl={{ md: 25 }} textAlign='justify' color='custom.theme.darkGray'>
							We are a clothing manufacturer with <b>more than 10 years of experience in the fashion industry</b>. 
						</Typography>
						<br />
						<Typography variant='body1' component='p' pl={{ md: 25 }} textAlign='justify' color='custom.theme.darkGray'>
							As a white-label provider, we cater to diverse retail levels, from mass to specialty, department stores, off-price retailers, and e-commerce platforms. Our emphasis lies in swift market delivery and direct-to-consumer approaches.
						</Typography>
						<br />
						<Typography variant='body1' component='p' pl={{ md: 25 }} pb={2} textAlign='justify' color='custom.theme.darkGray'>
							We are European-based and have our own successful clothing brands like <b>CandyCatz</b>, <b>Badinka</b>, and <b>RaveKitties</b>, all of which have been creating fashion for our satisfied customers for more than 10 years.
						</Typography>
					</Box>
				</Box>
			</Box>

		</>
	)
}

export default AboutSection