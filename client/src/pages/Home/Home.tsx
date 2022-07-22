import Footer from "../../components/footer/Footer";
import Info from "../../components/info/Info";
import Navigation from "../../components/navigation/Navigation";
import ProductsContainer from "../../components/productsContainer/ProductsContainer";
import Slider from "../../components/slider/Slider";
import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <Navigation />
      <Slider />
      <Info />
      <ProductsContainer />
      <Footer />
    </Container>
  );
};

export default Home;
