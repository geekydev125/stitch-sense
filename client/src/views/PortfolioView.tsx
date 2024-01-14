import portfolioImg from '../assets/img/portfolio.png'

import ViewTopTitleSection from "../components/ViewTopTitleSection"

function PortfolioView() {
	return (
		<ViewTopTitleSection viewTitle="Portfolio" imageSrc={portfolioImg} backgroundPosition="bottom" />
	)
}

export default PortfolioView