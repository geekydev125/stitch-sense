import designImage from '../assets/img/fashion-design.jpg'

import ObjectivesSolutionSection from '../components/Sections/ServicesViewSections/ObjectivesSolutionSection'
import ServicesTabs from '../components/Sections/ServicesViewSections/ServiceTabs/ServicesTabs'

import isTitledView from '../HOC/isTitledView'

import Container from "@mui/material/Container"
import Box from '@mui/material/Box'

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
		imageSrc: designImage,
		backgroundPosition: "bottom",
	}
)