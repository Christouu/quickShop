import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import WorkComponent from "../../components/workComponent/WorkComponent";
import { Container } from "./Work.styles";

const Work = () => {
  return (
    <Container>
      <Navigation />
      <WorkComponent />
      <Footer />
    </Container>
  );
};

export default Work;
