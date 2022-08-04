import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Line from "../line/Line";
import { publicRequest } from "../../requestMethods";
import SingleProductContainer from "../singleProductContainer/SingleProductContainer";
import {
  Button,
  Container,
  H1,
  InfoContainer,
} from "./ProductsContainer.styles";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await publicRequest.get("product/find");

        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <Container data-testid="productsContainer">
      <H1>Продукти</H1>
      <Line />
      <InfoContainer data-testid="infoContainer">
        {products.map((p: any) => (
          <div data-testid="product" key={p._id}>
            <SingleProductContainer product={p} />
          </div>
        ))}
      </InfoContainer>
      <Button role="button">
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
