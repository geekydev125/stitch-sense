import isTitledView from '../HOC/isTitledView'
import stitchingBackgroundImg from '/assets/img/stitching-background.jpg'

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
		imageSrc: stitchingBackgroundImg,
	}
)