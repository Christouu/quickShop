import { useState } from "react";
import { Link } from "react-router-dom";
import Line from "../line/Line";
import SingleProductContainer from "../singleProductContainer/SingleProductContainer";
import {
  Button,
  Container,
  H1,
  InfoContainer,
} from "./ProductsContainer.styles";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  return (
    <Container>
      <H1>Продукти</H1>
      <Line />
      <InfoContainer>
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
        <SingleProductContainer />
      </InfoContainer>
      <Button>
        <Link
          to={"/products"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Виж всички продукти
        </Link>
      </Button>
    </Container>
  );
};

export default ProductsContainer;
