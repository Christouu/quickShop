import { Container, H1, Image } from "./NotFound.styles";
import Navigation from "../navigation/Navigation";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <Container>
        <H1>Няма такава страница</H1>
        <Image src="assets/404.png" alt="Not Found" />
      </Container>
    </>
  );
};

export default NotFound;
