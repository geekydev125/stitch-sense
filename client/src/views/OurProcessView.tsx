import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import uniqid from 'uniqid'

import ourProcessBackgroundSmallScreen from '/assets/img/title-backgrounds/our-process-background-small-screen.jpg'
import ourProcessBackgroundLargeScreen from '/assets/img/title-backgrounds/our-process-background-large-screen.jpg'

import isTitledView from '../HOC/isTitledView'
import ProcessStepArticle from '../components/Sections/OurProcessView/ProcessStepArticle'

import ProcessStepCard from '../components/Cards/ProcessStepCard'
import CustomDivider from '../components/CustomDivider'
import CallToActionSection from '../components/CallToActionSection'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Arrow from '../components/Arrow'

export interface IStepArticle {
	title: string,
	content: string,
	step: number,
	imageSrc: string,
	contentOrder: 'left' | 'right'
}

const stepArticlesContent: IStepArticle[] = [
	{
		title: "LOREM IPSUM",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.		Sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. ",
		step: 1,
		imageSrc: "fashion-design.jpg",
		contentOrder: 'left'
	},
	{
		title: "LOREM IPSUM",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.		Sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. ",
		step: 2,
		imageSrc: "fashion-design.jpg",
		contentOrder: 'right'
	},
	{
		title: "LOREM IPSUM",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.		Sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. ",
		step: 3,
		imageSrc: "fashion-design.jpg",
		contentOrder: 'left'
	}
]

const stepCardsContent: Omit<IStepArticle, 'contentOrder'>[] = [
	{
		title: "PRODUCTION",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.",
		step: 4,
		imageSrc: "sewing-machine-icon.svg",
	},
	{
		title: "PACKAGING",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.",
		step: 5,
		imageSrc: "packaging-icon.svg",
	},
	{
		title: "SHIPPING",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.",
		step: 6,
		imageSrc: "shipping-icon.svg",
	}
]
function OurProcessView() {
	const theme = useTheme();
	const isXs = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box mt={{ xs: 5, md: 10 }} mb={{ xs: 7, md: 10 }}>
			<Container>
				<Grid container gap={5} >
					{stepArticlesContent.map((stepArticle) => (
						<Grid item key={uniqid()}>
							<ProcessStepArticle {...stepArticle} />
							{
								isXs ? null : <Arrow
									arrowType={2}
									height={50}
									mt={1}
									rotate={stepArticle.step === 2 ? 180 : 0}
									scaleY={stepArticle.step === 2 ? -1 : 1}
								/>
							}

						</Grid>
					))}
				</Grid>

				<Grid container spacing={5} mt={0}>
					{stepCardsContent.map((stepCard) => (
						<Grid item xs={12} sm={6} md={4} key={uniqid()}>
							<ProcessStepCard  {...stepCard} />
						</Grid>
					))
					}

				</Grid>

				<CustomDivider mt={{xs: 4, md: 10}} mb={4} />

				<CallToActionSection />
			</Container>
		</Box>
	)
}

export default isTitledView(OurProcessView,
	{
		viewTitle: "Our Process",
		imageSrcSmallScreen: ourProcessBackgroundSmallScreen,
		imageSrcLargeScreen: ourProcessBackgroundLargeScreen
	}
)