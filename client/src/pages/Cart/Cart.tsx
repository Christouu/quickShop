import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  Bottom,
  Button,
  Container,
  Details,
  HR,
  Info,
  Price,
  Product,
  ProductDelete,
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
import ClearIcon from "@mui/icons-material/Clear";
import { clear, deleteProduct } from "../../redux/cartRedux";

const Cart = () => {
  const { products, quantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();

  const handleDelete = (index: any, product: any) => {
    console.log(index);

    dispatch(deleteProduct({ index, product }));
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <Container>
      <Navigation />
      <Wrapper>
        <Title>Количка</Title>
        <Line></Line>
        <Top>
          <TopButton option="normal" onClick={handleClear}>
            Clear Cart
          </TopButton>
          <TopText>Продукти ({quantity})</TopText>
          <TopButton option="filled">Checkout Now </TopButton>
        </Top>
        <WrapperWhite>
          <Bottom>
            <Info>
              {products?.map((p: any, i: any) => (
                <div key={p._id + i}>
                  <Product>
                    <ProductDelete onClick={() => handleDelete(i, p)}>
                      <ClearIcon />
                    </ProductDelete>
                    <ProductDetails>
                      <ProductImage src={p.image} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {p.title}
                        </ProductName>

                        <ProductQuantity>
                          <b>Quantity:</b> {p.quantity} L
                        </ProductQuantity>
                      </Details>
                    </ProductDetails>
                    <ProductPrice>
                      <ProductPriceAmountContainer>
                        <AddIcon />
                        <ProductPriceAmount>{p.amount}</ProductPriceAmount>
                        <RemoveIcon />
                      </ProductPriceAmountContainer>
                      <Price>$ {p.price * p.amount}</Price>
                    </ProductPrice>
                  </Product>
                  <HR />
                </div>
              ))}
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
                <SummaryItemPrice>$ {totalPrice?.toFixed(2)}</SummaryItemPrice>
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
