import styled from '@emotion/styled'
import uniqid from 'uniqid'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

import getImageUrl from '../utils/image-util'

import isTitledView from '../HOC/isTitledView'
import CustomDivider from '../components/CustomDivider'
import CallToActionSection from '../components/CallToActionSection'
import HelmetSEO from '../components/HelmetSEO'

import portfolio from '../data/portfolio.json'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const StyledImage = styled('img')`
	transition: all 0.3s ease-in-out;
	&:hover {
		scale: 1.02;
	}
`


function PortfolioView() {
	const theme = useTheme()
	const isXs = useMediaQuery(theme.breakpoints.down('sm'))
	const isMd = useMediaQuery(theme.breakpoints.down('lg'))

	return (
		<>
			<HelmetSEO title="Portfolio" description="Explore Stitch Sense's captivating portfolio showcasing our exquisite designs, production prowess, and distribution excellence, curated for customers worldwide." />

			<Box mt={{ xs: 5, md: 6 }} mb={{ xs: 7, md: 10 }} >
				<Container>
					<CustomDivider mb={{ xs: 3, md: 4 }} />

					<ImageList variant="standard" cols={isXs ? 2 : 4} gap={isMd ? 5 : 10} component='section'>
						{portfolio.map((image) => (
							<ImageListItem key={uniqid()}>
								<StyledImage
									
									srcSet={`${getImageUrl('portfolio', image.imageSrc)}?w=248&fit=crop&auto=format&dpr=2 2x`}
									src={`${getImageUrl('portfolio', image.imageSrc)}?w=248&fit=crop&auto=format`}
									alt={image.title}
									loading="lazy"
									title={image.title}
								/>
							</ImageListItem>
						))}
					</ImageList>

					<CustomDivider mt={{ xs: 4, md: 5 }} mb={{ xs: 3, md: 4 }} />

					<CallToActionSection />
				</Container>
			</Box>
		</>
	)
}

export default isTitledView(PortfolioView,
	{
		viewTitle: "Portfolio",
		imageSrcSmallScreen: getImageUrl('title-backgrounds', 'portfolio-background-small-screen.jpg'),
		imageSrcLargeScreen: getImageUrl('title-backgrounds', 'portfolio-background-large-screen.jpg'),
	}
)