import uniqid from 'uniqid'

import services from '../../../data/services.json'
import SectionTitle from '../../SectionTitle'
import FlipCard from '../../Cards/FlipCard';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function WhatWeDoSection() {
	
	return (
		<Box component='section'>
			<SectionTitle title='WHAT WE DO' mt={4} mb={2} />

			<Typography variant='h4' component='p' textAlign={{xs: 'justify', md: 'center'}} mt={2} mb={4} color='custom.theme.darkGray'>
				A complete private label solution for retailers and brand owners.
			</Typography>

			<Grid container spacing={{xs: 1, md: 2}}>

				{services.map((service) => {
					return (
						<Grid item xs={12} sm={6} lg={4} key={uniqid()}>
							<FlipCard
								{...service}
							/>
						</Grid>
					)
				})}
			</Grid>
		</Box>
	);
}

export default WhatWeDoSection;
