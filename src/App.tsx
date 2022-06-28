import "./App.css";
import Info from "./components/info/Info";
import Navigation from "./components/navigation/Navigation";
import ProductsContainer from "./components/productsContainer/ProductsContainer";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <>
      <Navigation />
      <Slider />
      <Info />
      <ProductsContainer />
    </>
  );
}

export default App;
