import isTitledView from '../HOC/isTitledView'
import portfolioImg from '../assets/img/portfolio.png'

function PortfolioView() {
	return (
		<>
			PortfolioView
		</>
	)
}

export default isTitledView(PortfolioView,
	{
		viewTitle: "Portfolio",
		imageSrc: portfolioImg,
		backgroundPosition: "bottom"
	}
)