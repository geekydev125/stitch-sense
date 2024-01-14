import designImage from '../assets/img/fashion-design.jpg'

import ViewTopTitleSection from "../components/ViewTopTitleSection"

import Container from "@mui/material/Container"
import ObjectivesSolutionSection from '../components/Sections/ServicesViewSections/ObjectivesSolutionSection'
import ServicesTabs from '../components/ServiceTabs/ServicesTabs'
import Box from '@mui/material/Box'

function ServicesView() {
	return (
		<>
			<ViewTopTitleSection viewTitle="Services" imageSrc={designImage} />
			<Container>
				<Box py={10}>
					<ObjectivesSolutionSection />

					<ServicesTabs />
				</Box>
			</Container>
		</>

	)
}

export default ServicesView