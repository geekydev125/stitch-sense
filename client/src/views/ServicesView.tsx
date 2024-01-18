import fashionDesignBackgroundImage from '/assets/img/fashion-design-background.jpg'

import isTitledView from '../HOC/isTitledView'

import Container from "@mui/material/Container"
import Box from '@mui/material/Box'
import ObjectivesSolutionSection from '../components/Sections/ServicesView/ObjectivesSolutionSection'
import ServicesTabs from '../components/Sections/ServicesView/ServiceTabs/ServicesTabs'

function ServicesView() {
	return (
		<>
			<Container>
				<Box py={10}>
					<ObjectivesSolutionSection />

					<ServicesTabs />
				</Box>
			</Container>
		</>
	)
}

export default isTitledView(ServicesView,
	{
		viewTitle: "Services",
		imageSrc: fashionDesignBackgroundImage,
	}
)