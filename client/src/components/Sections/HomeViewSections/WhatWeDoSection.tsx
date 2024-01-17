import uniqid from 'uniqid'

import services from '../../../data/services.json'
import FlipCard from '../../FlipCard';
import SectionTitle from '../../SectionTitle'

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function WhatWeDoSection() {
	return (
		<>
			<SectionTitle title='WHAT WE DO' mt={4} mb={2} p={2} />

			<Typography variant='body1' component='p' textAlign='center' mt={2} mb={4}>
				<b>StitchSense</b> specializes in sublimation on polyesters and a wide array of sewing services, with an emphasis on t-shirts, hoodies, sweaters, sportswear, loungewear, and costumes/jumpsuits. We pride ourselves in providing high-quality apparel products and speedy, customer-centric service.
			</Typography>

			<Grid container spacing={2}>

				{services.map((service) => {
					return (
						<Grid item xs={12} md={6} lg={4} key={uniqid()}>
							<FlipCard
								title={service.title}
								content={service.content}
								imageSrc={service.imageSrc}
								linkTo={service.linkTo}
							/>
						</Grid>
					)

				})}


			</Grid>

		</>
	);
}

export default WhatWeDoSection;
