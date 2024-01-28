import uniqid from 'uniqid'

import isTitledView from '../HOC/isTitledView'

import aboutBackgroundSmallScreen from '../assets/img/title-backgrounds/about-background-small-screen.jpg'
import aboutBackgroundLargeScreen from '../assets/img/title-backgrounds/about-background-large-screen.jpg'
import employeesImpactCardsContent from '../data/employeesImpact.json'

import SimpleEmployeeCard from '../components/Cards/SimpleEmployeeCard'
import CustomDivider from '../components/CustomDivider'
import EmployeeCard from '../components/Cards/EmployeeCard'

import employeesData from '../data/employees.json'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CallToActionSection from '../components/CallToActionSection'
import { Icard } from '../components/Sections/HomeView/WhyTrustUsSection'
import SectionTitle from '../components/SectionTitle'

export interface IEmployee {
	firstName: string
	lastName: string
	position: string
	imageSrc: string | null
}

function AboutView() {
	return (
		<Box mt={5} mb={{ xs: 3, md: 8 }}>
			<Container>
				<Box p={5}>
					<Typography variant='body1' component='p' textAlign='justify' color='custom.theme.darkGray'>
						With <Box component='span' textTransform='uppercase' fontWeight='bold'>over a decade of expertise in the dynamic realm of fashion</Box>, we proudly stand as a seasoned clothing manufacturer. Our commitment to excellence has propelled us into various facets of the industry.
					</Typography>
					<br />
					<Typography variant='body1' component='p' textAlign='justify' color='custom.theme.darkGray'>
						Functioning as a premier white-label provider, our clientele spans diverse retail landscapes—from mass and specialty outlets to department stores, off-price retailers, and cutting-edge e-commerce platforms. Our core focus revolves around ensuring rapid market delivery and adopting direct-to-consumer strategies.
					</Typography>
					<br />
					<Typography variant='body1' component='p' pb={2} textAlign='justify' color='custom.theme.darkGray'>
						Based in Europe, we are the creative force behind renowned clothing brands such as <Box component='span' fontWeight='bold'>Badinka, CandyCatz and RaveKitties</Box>. For more than 10 years, these brands have curated captivating fashion experiences for our delighted customers, showcasing our unwavering dedication to style and quality.
					</Typography>
				</Box>


				{/* <CustomDivider  mb={{ xs: 2, md: 4 }} /> */}
				<SectionTitle title='OUR IMPACT ON EMPLOYEES' variant='h5' justify='left' p={2} mb={2}/>
				<Grid container spacing={{ xs: 1, md: 2 }} >
					{employeesImpactCardsContent.map(card => {
						return (
							<Grid key={uniqid()} item xs={12} md={4}>
								<SimpleEmployeeCard {...card as Omit<Icard, "imageSrc" | "alt">} />
							</Grid>
						)
					})}
				</Grid>

				<CustomDivider mt={{ xs: 3, md: 6 }} mb={{ xs: 3, md: 3 }} />

				<SectionTitle title='OUR TEAM' variant='h5' justify='left' p={2} mb={2}/>
				<Grid container spacing={{ xs: 1, md: 2 }}>
					{employeesData.map((employee: IEmployee) => (
						<Grid key={uniqid()} item xs={6} md={4}>
							<EmployeeCard {...employee} />
						</Grid>
					))}
				</Grid>


				<CustomDivider mt={{ xs: 1, md: 3 }} mb={{ xs: 4, md: 5 }} />

				<CallToActionSection />
			</Container>
		</Box>

	)
}

export default isTitledView(AboutView,
	{
		viewTitle: "About Us",
		imageSrcSmallScreen: aboutBackgroundSmallScreen,
		imageSrcLargeScreen: aboutBackgroundLargeScreen
	}
)