import isTitledView from '../HOC/isTitledView'
import fashioDesignStudioBackgroundImg from '/assets/img/fashion-design-studio-background.jpg'

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
    imageSrc: fashioDesignStudioBackgroundImg,
  }
)