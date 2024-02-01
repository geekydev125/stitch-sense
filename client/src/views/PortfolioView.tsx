import uniqid from 'uniqid'
import ProgressiveImage from 'react-progressive-image-loading'

import getImageUrl from '../utils/image-util'

import isTitledView from '../HOC/isTitledView'
import CustomDivider from '../components/CustomDivider'
import CallToActionSection from '../components/CallToActionSection'

import portfolio from '../data/portfolio.json'

import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import Link from '@mui/material/Link'
import ImageListItem from '@mui/material/ImageListItem'

function PortfolioView() {
	const theme = useTheme()
	const isXs = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Box mt={{ xs: 5, md: 6 }} mb={{ xs: 7, md: 10 }}>
			<Container>

				<CustomDivider mb={{ xs: 3, md: 4 }} />

				<ImageList variant="standard" cols={isXs ? 2 : 4} gap={5}>
					{portfolio.map((image) => (
						<Link href='#' target='_blank' key={uniqid()}>
							<ImageListItem>
								<ProgressiveImage
									preview={getImageUrl('portfolio', image.imageSrcSmall)}
									src={getImageUrl('portfolio', image.imageSrc)} 
									initialBlur={5}
									render={(src, style) => <img src={src} style={style} alt={image.title} loading="lazy"/>}
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
		imageSrcSmallScreen: getImageUrl('title-backgrounds', 'portfolio-background-small-screen.jpg'),
		imageSrcLargeScreen: getImageUrl('title-backgrounds', 'portfolio-background-large-screen.jpg'),
	}
)