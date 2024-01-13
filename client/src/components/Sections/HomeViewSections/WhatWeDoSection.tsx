import uniqid from 'uniqid'



import designImage from '/assets/img/fashion-design.jpg'
import productionImage from '/assets/img/stitching.jpg'
import submilationImage from '/assets/img/sublimation.png'
import sourcingImage from '/assets/img/fabrics.jpg'
import distributionImage from '/assets/img/distribution.jpg'
import samplingImage from '/assets/img/sampling.jpg'

import FlipCard from '../../FlipCard';
import SectionTitle from '../../SectionTitle'

import Grid from '@mui/material/Grid';

const cardsContent = [
	{
		title: 'DESIGN',
		content: 'We can help you with designing thanks to our experienced and talented designers. You could also use our sewing patterns/cuts for your order. We can help you brainstorm design ideas, provide you with a sewing pattern, or  you can give us an already completed design that you would like us to follow.',
		imageSrc: designImage,
		linkTo: 'services'
	},
	{
		title: 'PRODUCTION',
		content: 'We can reach a daily production output ranging from 500 to 600 items, all crafted to the highest standards. Moreover, we always pay careful attention to the quality of items produced with our special quality assurance team constantly overseeing the manufactured outputs.',
		imageSrc: productionImage,
		linkTo: 'services'
	},
	{
		title: 'SUBLIMATION',
		content: 'In the realm of sublimation on polyesters, we take pride in our technological prowess. Six top-tier Japanese printers and two cutting-edge cutting lasers constitute the backbone of our sublimation processes. These advanced technologies underscore our dedication to precision and uncompromising quality.',
		imageSrc: submilationImage,
		linkTo: 'services'
	},
	{
		title: 'SOURCING',
		content: 'With an expansive network of fabric distributors, fortified by enduring relationships and decades of seasoned experience, we excel in identifying the optimal sourcing solution for each unique need so we can meet any requirements for specific materials and textiles.',
		imageSrc: sourcingImage,
		linkTo: 'services'
	},
	{
		title: 'DISTRIBUTION',
		content: 'With a dedicated team of 50 highly skilled seamstresses, each equipped with state-of-the-art sewing machines, we can fulfill orders of different volumes. When demand peaks, we integrate an additional 50 skilled seamstresses into our workforce.',
		imageSrc: distributionImage,
		linkTo: 'services'
	},
	{
		title: 'SAMPLING',
		content: "You have the option to request a free sample of a clothing item you're interested in at absolutely no extra cost. This allows you to assess the product's quality firsthand before moving forward with your order. Your satisfaction is our priority, and we want to ensure you're confident in your investment.",
		imageSrc: samplingImage,
		linkTo: 'services'
	}
]


function WhatWeDoSection() {
	return (
		<>
			<SectionTitle title='WHAT WE DO' mt={4} mb={2} p={2}/>

			<Grid container spacing={2}>

				{cardsContent.map((card) => {
					return (
						<Grid item xs={12} md={6} lg={4} key={uniqid()}>
							<FlipCard title={card.title} content={card.content} imageSrc={card.imageSrc} linkTo={card.linkTo} />
						</Grid>
					)

				})}


			</Grid>

		</>
	);
}

export default WhatWeDoSection;
