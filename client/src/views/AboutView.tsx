import uniqid from 'uniqid'

import isTitledView from '../HOC/isTitledView'

import fashioDesignStudioBackgroundImg from '/assets/img/fashion-design-studio-background.jpg'
import { employeesCardsContent } from '../components/Sections/HomeViewSections/WhyTrustUsSection'
import SimpleCard from '../components/Cards/SimpleCard'
import CustomDivider from '../components/CustomDivider'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function AboutView() {
	return (
		<Box my={5}>
			<Container>
				<Typography variant="body1" component="p" textAlign='center' color='custom.theme.darkGray'>
					Lorem ipsum dolor sit amet, an eum habeo explicari. Et sed exerci hendrerit, no summo simul partiendo est. Modus iriure voluptua at pri, cu copiosae appetere electram mei. Solum dolorum tractatos mea at. Eu commodo gubergren mel, in vix alterum dolores laboramus.
				</Typography>


				<CustomDivider my={4} />

				<Grid container spacing={2} mt={0}>
					{employeesCardsContent.map(card => {
						return (
							<Grid key={uniqid()} item xs={12} md={4}>
								<SimpleCard
									title={card.title}
									content={card.content}
									imageSrc={card.imageSrc}
									variant={card.variant}
									type={card.type} />
							</Grid>
						)
					})}
				</Grid>
			</Container>
		</Box>

	)
}

export default isTitledView(AboutView,
	{
		viewTitle: "About Us",
		imageSrc: fashioDesignStudioBackgroundImg,
	}
)