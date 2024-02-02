import Grid from '@mui/material/Grid'
import aboutBackgroundFaded from '../../../assets/img/about-background-faded.png'

import SectionTitle from '../../SectionTitle'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function WhoWeAreSection() {
	return (
		<>
			<Box id='about-section' component='section'>
				<SectionTitle title='WHO WE ARE' mt={4} mb={2} />
				<Box p={{ xs: 0, md: 3 }} >
					<Box
						py={4}
						sx={{
							backgroundImage: {
								xs: 'none',
								md: `url(${aboutBackgroundFaded})`,
							},
							backgroundRepeat: 'no-repeat',							
							backgroundSize: 'contain',
							borderRadius: '10px',
						}}
					>

						<Grid container>
							<Grid item md={3}>
							</Grid>

							<Grid item md={9}>
								<Typography variant='body1' component='p' pl={{ md: 25 }} textAlign='justify' color='custom.theme.darkGray'>
									With <Box component='span' textTransform='uppercase' fontWeight='bold'>over a decade of expertise in the dynamic realm of fashion</Box>, we proudly stand as a seasoned clothing manufacturer. Our commitment to excellence has propelled us into various facets of the industry.
								</Typography>
								<br />
								<Typography variant='body1' component='p' pl={{ md: 25 }} textAlign='justify' color='custom.theme.darkGray'>
									Functioning as a premier white-label provider, our clientele spans diverse retail landscapes—from mass and specialty outlets to department stores, off-price retailers, and cutting-edge e-commerce platforms. Our core focus revolves around ensuring rapid market delivery and adopting direct-to-consumer strategies.
								</Typography>
								<br />
								<Typography variant='body1' component='p' pl={{ md: 25 }} pb={2} textAlign='justify' color='custom.theme.darkGray'>
									Based in Europe, we are the creative force behind renowned clothing brands such as <Box component='span' fontWeight='bold'>Badinka, CandyCatz and RaveKitties</Box>. For more than 10 years, these brands have curated captivating fashion experiences for our delighted customers, showcasing our unwavering dedication to style and quality.
								</Typography>
							</Grid>

						</Grid>
					</Box>
				</Box>
			</Box>

		</>
	)
}

export default WhoWeAreSection