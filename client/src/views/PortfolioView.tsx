import uniqid from 'uniqid'

import portfolioBackgroundSmallScreen from '../assets/img/title-backgrounds/portfolio-background-small-screen.jpg'
import portfolioBackgroundLargeScreen from '../assets/img/title-backgrounds/portfolio-background-large-screen.jpg'

import getImageUrl from '../utils/image-util'
import isTitledView from '../HOC/isTitledView'
import CustomDivider from '../components/CustomDivider'
import CallToActionSection from '../components/CallToActionSection'

import portfolio from '../data/portfolio.json'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import Link from '@mui/material/Link'
import ImageListItem from '@mui/material/ImageListItem'

function PortfolioView() {

	return (
		<Box mt={{ xs: 5, md: 6 }} mb={{ xs: 7, md: 10 }}>
			<Container>

				<CustomDivider mb={{ xs: 3, md: 4 }} />

				<ImageList variant="standard" cols={4} gap={5}>
					{portfolio.map((image) => (
						<Link href='#' target='_blank' key={uniqid()}>
							<ImageListItem>
								<img
									srcSet={`${getImageUrl('portfolio', image.imageSrc)}?w=248&fit=crop&auto=format&dpr=2 2x`}
									src={`${getImageUrl('portfolio', image.imageSrc)}?w=248&fit=crop&auto=format`}
									alt={image.title}
									loading="lazy"
								/>
							</ImageListItem>
						</Link>
					))}
				</ImageList>

				<CustomDivider mt={{ xs: 4, md: 5 }} mb={{ xs: 3, md: 4 }} />

				<CallToActionSection />
			</Container>
		</Box>
	)
}

export default isTitledView(PortfolioView,
	{
		viewTitle: "Portfolio",
		imageSrcSmallScreen: portfolioBackgroundSmallScreen,
		imageSrcLargeScreen: portfolioBackgroundLargeScreen
	}
)