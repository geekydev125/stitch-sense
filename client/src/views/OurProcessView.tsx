import uniqid from 'uniqid'
import isTitledView from '../HOC/isTitledView'
import stitchingBackgroundImg from '/assets/img/stitching-background.jpg'
import ProcessStepArticle from '../components/Sections/OurProcessView/ProcessStepArticle'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Arrow from '../components/Arrow'
import ProcessStepCard from '../components/Cards/ProcessStepCard'
import CustomDivider from '../components/CustomDivider'
import CallToActionSection from '../components/CallToActionSection'

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
		title: "LOREM IPSUM",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.",
		step: 4,
		imageSrc: "sewing-machine-icon.png",
	},
	{
		title: "LOREM IPSUM",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.",
		step: 5,
		imageSrc: "packaging-icon.png",
	},
	{
		title: "LOREM IPSUM",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus id nunc id rutrum. Fusce lacinia pellentesque est, sit amet vulputate ex blandit in. Donec luctus dolor eu vehicula convallis. Nulla eget luctus eros. In sollicitudin metus ac magna maximus, et varius ex dapibus.",
		step: 6,
		imageSrc: "shipping-icon.png",
	}
]
function OurProcessView() {
	return (
		<Box my={10}>
			<Container>
				<Grid container gap={5} >
					{stepArticlesContent.map((stepArticle) => (
						<Grid item>
							<ProcessStepArticle key={uniqid()} {...stepArticle} />
							<Arrow 
								arrowType={2} 
								rotate={stepArticle.step === 2 ? 180 : 0 } 
								scaleY={stepArticle.step === 2 ? -1 : 1} 
								/>
						</Grid>
					))}
				</Grid>

				<Grid container spacing={5} mt={0}>
					{stepCardsContent.map((stepCard) => (
						<Grid item xs={12} md={4}>
							<ProcessStepCard key={uniqid()} {...stepCard} />
						</Grid>
					))
					}

				</Grid>

				<CustomDivider mt={10} mb={5} />

				<CallToActionSection />
			</Container>
		</Box>
	)
}

export default isTitledView(OurProcessView,
	{
		viewTitle: "Our Process Us",
		imageSrc: stitchingBackgroundImg,
	}
)