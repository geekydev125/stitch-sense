import euFlag from '/assets/img/eu-flag-transparent.png'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function AboutSection() {
	return (
		<>
			<Box>
				<Typography variant="h3" component='h4' textAlign='center' my={4}>ABOUT US</Typography>
				<Box
					sx={{
						background: `url(${euFlag}) no-repeat`,
						backgroundSize: 'contain',
						backgroundPosition: 'left center'
					}}
					p={2}
				>
					<Typography variant='h5' component='p' mb={5} pl={{md: 25}} textAlign='justify'>
						We are a clothing manufacturer with more than 10 years of experience in the fashion industry, <b>StitchSense</b> specializes in sublimation on polyesters and a wide array of sewing services, with an emphasis on t-shirts, hoodies, sweaters, sportswear, loungewear, and costumes/jumpsuits. We pride ourselves in providing high-quality apparel products and speedy, customer-centric service.
					</Typography>

					<Typography variant='h5' component='p' pl={{md: 25}} pb={2} textAlign='justify'>
						We are European-based and have our own successful clothing brands like <b>CandyCatz</b>, <b>Badinka</b>, and <b>RaveKitties</b>, all of which have been creating fashion for our satisfied customers for more than 10 years.
					</Typography>
				</Box>
			</Box>

		</>
	)
}

export default AboutSection