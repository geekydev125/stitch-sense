import femaleTailorImg from '../assets/img/female-tailor.png'
import ViewTopTitleSection from '../components/ViewTopTitleSection'

function AboutView() {
  return (
    <ViewTopTitleSection viewTitle="About Us" imageSrc={femaleTailorImg} backgroundPosition="top" />
  )
}

export default AboutView