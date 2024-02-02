import getImageUrl from '../utils/image-util'

import isTitledView from '../HOC/isTitledView'

import ServicesTabs from '../components/Sections/ServicesView/ServiceTabs/ServicesTabs'
import CallToActionSection from '../components/CallToActionSection'
import CustomDivider from '../components/CustomDivider'
import HelmetSEO from '../components/HelmetSEO'

import Container from "@mui/material/Container"
import Box from '@mui/material/Box'


function ServicesView() {
	return (
		<>
			<HelmetSEO title="Services" description="Explore Stitch Sense's comprehensive services for top-quality fashion design, sublimation, production, and clothing distribution solutions." />

			<Box py={{ xs: 5, md: 6 }}>
				<Container>
					<CustomDivider mb={{ xs: 3, md: 4 }} />

					<ServicesTabs />

					<CustomDivider mt={{ xs: 3, md: 5 }} mb={{ xs: 3, md: 5 }} />

					<CallToActionSection />
				</Container>
			</Box>
		</>
	)

}

export default isTitledView(ServicesView,
	{
		viewTitle: "Services",
		imageSrcSmallScreen: getImageUrl('title-backgrounds', 'services-background-small-screen.jpg'),
		imageSrcLargeScreen: getImageUrl('title-backgrounds', 'services-background-large-screen.jpg'),
	}
)