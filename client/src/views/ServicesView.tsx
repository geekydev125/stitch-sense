import fashionDesignBackgroundImage from '/assets/img/title-backgrounds/fashion-design-background.jpg'

import isTitledView from '../HOC/isTitledView'

import Container from "@mui/material/Container"
import Box from '@mui/material/Box'
import ObjectivesSolutionSection from '../components/Sections/ServicesView/ObjectivesSolutionSection'
import ServicesTabs from '../components/Sections/ServicesView/ServiceTabs/ServicesTabs'
import CallToActionSection from '../components/CallToActionSection'
import CustomDivider from '../components/CustomDivider'

function ServicesView() {
	return (
			<Box py={10}>
				<Container>

					<ObjectivesSolutionSection />

					<ServicesTabs />


					<CustomDivider mb={5} />

					<CallToActionSection />
				</Container>
			</Box>
	)
}

export default isTitledView(ServicesView,
	{
		viewTitle: "Services",
		imageSrc: fashionDesignBackgroundImage,
	}
)