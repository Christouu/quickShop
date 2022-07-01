import AboutComponent from "../../components/about/AboutComponent"
import Footer from "../../components/footer/Footer"
import Navigation from "../../components/navigation/Navigation"
import { Container } from "./Aboust.styles"


const About = () => {
  return (
    <Container>
        <Navigation/>
        <AboutComponent/>
        <Footer/>
    </Container>
  )
}

export default About