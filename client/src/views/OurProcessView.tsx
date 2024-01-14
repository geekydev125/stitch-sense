import isTitledView from '../HOC/isTitledView'
import stitchingImg from '../assets/img/stitching.jpg'

function OurProcessView() {
	return (
		<>
			Our Process View

		</>
	)
}

export default isTitledView(OurProcessView,
	{
		viewTitle: "Our Process Us",
		imageSrc: stitchingImg,
		backgroundPosition: "bottom",
	}
)