import isTitledView from '../HOC/isTitledView'
import portfolioBacgkroundImg from '/assets/img/portfolio-background.jpg'

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
		imageSrc: portfolioBacgkroundImg,
	}
)