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
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import Link from '@mui/material/Link'
import ImageListItem from '@mui/material/ImageListItem'

function PortfolioView() {

	return (
		<Box mt={{ xs: 5, md: 10 }} mb={{ xs: 7, md: 10 }}>
			<Container>
				<Box px={{ xs: 0, md: 10 }}>
					<Typography variant="body1" component="p" textAlign={{ xs: 'justify', md: 'center' }} color='custom.theme.darkGray'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
					</Typography>
				</Box>

				<CustomDivider mt={{ xs: 3, md: 5 }} mb={{ xs: 3, md: 4 }} />

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