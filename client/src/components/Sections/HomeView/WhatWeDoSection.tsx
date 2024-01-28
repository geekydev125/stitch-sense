import uniqid from 'uniqid'

import services from '../../../data/services.json'
import FlipCard from '../../Cards/FlipCard';
import SectionTitle from '../../SectionTitle'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function WhatWeDoSection() {
	
	return (
		<>
			<SectionTitle title='WHAT WE DO' mt={4} mb={2} p={2} />

			<Typography variant='body1' component='p' textAlign={{xs: 'justify', md: 'center'}} mt={2} mb={4} color='custom.theme.darkGray'>
				<b>StitchSense</b> specializes in sublimation on polyesters and a wide array of sewing services, with an emphasis on t-shirts, hoodies, sweaters, sportswear, loungewear, and costumes/jumpsuits. We pride ourselves in providing high-quality apparel products and speedy, customer-centric service.
			</Typography>

			<Grid container spacing={{xs: 1, md: 2}}>

				{services.map((service) => {
					return (
						<Grid item xs={12} sm={6} lg={4} key={uniqid()}>
							<FlipCard
								title={service.title}
								content={service.content}
								imageSrc={service.imageSrc}
								linkTo={service.linkTo}
								tabValue={service.tabValue}
							/>
						</Grid>
					)
				})}
			</Grid>
		</>
	);
}

export default WhatWeDoSection;
