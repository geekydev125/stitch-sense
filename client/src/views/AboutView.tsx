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

export interface IEmployee {
	firstName: string
	lastName: string
	position: string
	imageSrc: string | null
}

function AboutView() {
	return (
		<Box mt={5} mb={{xs: 3, md: 8}}>
			<Container>
				<Typography variant="body1" component="p" textAlign={{xs: 'justify', md: 'center'}} color='custom.theme.darkGray'>
					Lorem ipsum dolor sit amet, an eum habeo explarasdi. Et sed exerci hendrerit, no summo simul partiendo est. Modus iriure voluptua at pri, cu copiosae appetere electram mei. Solum dolorum tractatos mea at. Eu commodo gubergren mel, in vix alterum dolores laboramus.
				</Typography>


				<CustomDivider mt={{xs: 3, md: 4}} mb={{xs: 2, md: 4}} />

				<Grid container spacing={{xs: 1, md: 2}} >
					{employeesImpactCardsContent.map(card => {
						return (
							<Grid key={uniqid()} item xs={12} md={4}>
								 <SimpleEmployeeCard {...card as Omit<Icard, "imageSrc" | "alt">} />
							</Grid>
						)
					})}
				</Grid>

				<CustomDivider my={{xs: 3, md: 5}} />

				<Grid container spacing={{xs: 1, md: 2}}>
					{employeesData.map((employee: IEmployee) => (
						<Grid key={uniqid()} item xs={6} md={4}>
							<EmployeeCard {...employee} />
						</Grid>
					))}
				</Grid>


				<CustomDivider mt={{xs: 1, md: 3}} mb={{xs: 4, md: 5}} />
				
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