import {
  Bottom,
  Button,
  Container,
  Details,
  HR,
  Info,
  Price,
  Product,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductPriceAmount,
  ProductPriceAmountContainer,
  ProductQuantity,
  Summary,
  SummaryItem,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  Wrapper,
  WrapperWhite,
} from "./Cart.styles";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import Line from "../../components/line/Line";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  return (
    <Container>
      <Navigation />
      <Wrapper>
        <Title>Your Bag</Title>
        <Line></Line>
        <Top>
          <TopButton option="normal">Continure Shopping</TopButton>
          <TopText>Shopping Bag(2)</TopText>
          <TopButton option="filled">Checkout Now </TopButton>
        </Top>
        <WrapperWhite>
          <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                  <ProductImage src="https://images.prom.ua/2081880662_voda-vodichka-05l.jpg" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Vodichka
                    </ProductName>
                    <ProductQuantity>
                      <b>Quantity:</b> 0.5 L
                    </ProductQuantity>
                  </Details>
                </ProductDetails>
                <ProductPrice>
                  <ProductPriceAmountContainer>
                    <AddIcon />
                    <ProductPriceAmount>2</ProductPriceAmount>
                    <RemoveIcon />
                  </ProductPriceAmountContainer>
                  <Price>$ 30</Price>
                </ProductPrice>
              </Product>
              <HR />
              <Product>
                <ProductDetails>
                  <ProductImage src="https://images.prom.ua/2081880662_voda-vodichka-05l.jpg" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Vodichka
                    </ProductName>
                    <ProductQuantity>
                      <b>Quantity:</b> 0.5 L
                    </ProductQuantity>
                  </Details>
                </ProductDetails>
                <ProductPrice>
                  <ProductPriceAmountContainer>
                    <AddIcon />
                    <ProductPriceAmount>2</ProductPriceAmount>
                    <RemoveIcon />
                  </ProductPriceAmountContainer>
                  <Price>$ 30</Price>
                </ProductPrice>
              </Product>
              <HR />
              <Product>
                <ProductDetails>
                  <ProductImage src="https://images.prom.ua/2081880662_voda-vodichka-05l.jpg" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Vodichka
                    </ProductName>
                    <ProductQuantity>
                      <b>Quantity:</b> 0.5 L
                    </ProductQuantity>
                  </Details>
                </ProductDetails>
                <ProductPrice>
                  <ProductPriceAmountContainer>
                    <AddIcon />
                    <ProductPriceAmount>2</ProductPriceAmount>
                    <RemoveIcon />
                  </ProductPriceAmountContainer>
                  <Price>$ 30</Price>
                </ProductPrice>
              </Product>
              <HR />
              <Product>
                <ProductDetails>
                  <ProductImage src="https://images.prom.ua/2081880662_voda-vodichka-05l.jpg" />
                  <Details>
                    <ProductName>
                      <b>Product:</b> Vodichka
                    </ProductName>
                    <ProductQuantity>
                      <b>Quantity:</b> 0.5 L
                    </ProductQuantity>
                  </Details>
                </ProductDetails>
                <ProductPrice>
                  <ProductPriceAmountContainer>
                    <AddIcon />
                    <ProductPriceAmount>2</ProductPriceAmount>
                    <RemoveIcon />
                  </ProductPriceAmountContainer>
                  <Price>$ 30</Price>
                </ProductPrice>
              </Product>
              <HR />
            </Info>
            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Discount</SummaryItemText>
                <SummaryItemPrice>$ -2.99</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem option="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 90</SummaryItemPrice>
              </SummaryItem>
              <Button>Checkout Now</Button>
            </Summary>
          </Bottom>
        </WrapperWhite>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
