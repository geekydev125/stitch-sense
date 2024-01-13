import designImage from '/assets/img/fashion-design.jpg'

import Container from "@mui/material/Container"
import ViewTopTitleSection from "../components/ViewTopTitleSection"

function ServicesView() {
	return (
		<>
			<ViewTopTitleSection viewTitle="Services" imageSrc={designImage} />
			<Container>ServicesView</Container>
		</>

	)
}

export default ServicesView