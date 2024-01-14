import isTitledView from '../HOC/isTitledView'
import femaleTailorImg from '../assets/img/female-tailor.png'

function AboutView() {
  return (
    <>
      About Us view
    </>

  )
}

export default isTitledView(AboutView,
  {
    viewTitle: "About Us",
    imageSrc: femaleTailorImg,
    backgroundPosition: "top",
  }
)