import uniqid from 'uniqid'

import services from '../../../data/services.json'
import FlipCard from '../../FlipCard';
import SectionTitle from '../../SectionTitle'

import Grid from '@mui/material/Grid';

function WhatWeDoSection() {
	return (
		<>
			<SectionTitle title='WHAT WE DO' mt={4} mb={2} p={2} />

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
