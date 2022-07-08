import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { Container2, H1, Wrapper } from "./ProductsOnSale.styles";

import Footer from "../../components/footer/Footer";
import Line from "../../components/line/Line";
import Navigation from "../../components/navigation/Navigation";
import { InfoContainer } from "../../components/productsContainer/ProductsContainer.styles";
import SingleProductContainer from "../../components/singleProductContainer/SingleProductContainer";

const ProductsOnSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await publicRequest.get("product/sale");

        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <Container2>
      <Navigation />
      <H1>Продукти на промоция</H1>
      <Line />
      <Wrapper>
        <InfoContainer>
          {products.map((p: any) => (
            <SingleProductContainer key={p._id} product={p} />
          ))}
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container2>
  );
};

export default ProductsOnSale;
