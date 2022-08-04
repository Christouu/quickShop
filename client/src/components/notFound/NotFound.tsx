import { Container, H1, Image } from "./NotFound.styles";
import Navigation from "../navigation/Navigation";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <Container data-testid="notFound">
        <H1 data-testid="heading">Няма такава страница</H1>
        <Image
          src="assets/404.png"
          alt="Not Found Image"
          data-testid="notFoundImage"
        />
      </Container>
    </>
  );
};

export default NotFound;
