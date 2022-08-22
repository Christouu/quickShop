import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

const Success = () => {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <Navigation />
      <div>Успешно плащане</div>
      <Footer />
    </>
  );
};

export default Success;
