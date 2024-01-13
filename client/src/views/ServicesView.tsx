import designImage from '/assets/img/fashion-design.jpg'

import ViewTopTitleSection from "../components/ViewTopTitleSection"

import Container from "@mui/material/Container"
import ObjectivesSolutionSection from '../components/Sections/ServicesViewSections/ObjectivesSolutionSection'




function ServicesView() {
	return (
		<>
			<ViewTopTitleSection viewTitle="Services" imageSrc={designImage} />
			<Container>
				<ObjectivesSolutionSection />
			</Container>
		</>

	)
}

export default ServicesView