import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
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
import Line from "../../components/line/Line";
import Navigation from "../../components/navigation/Navigation";

import ClearIcon from "@mui/icons-material/Clear";
import StripeCheckout from "react-stripe-checkout";
import { privateRequest, publicRequest } from "../../requestMethods";
import { clear, deleteProduct } from "../../redux/cartRedux";
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const { products, quantity, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );
  const [stripeToken, setStripeToken] = useState(null);

  const dispatch = useDispatch();
  const history = useNavigate();

  const handleDelete = (index: any, product: any) => {
    dispatch(deleteProduct({ index, product }));
  };

  const handleClear = () => {
    dispatch(clear());
  };

  const onToken = (token: any) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = await privateRequest.post("/checkout/payment", {
          //@ts-ignore
          tokenId: stripeToken.id,
          amount: 500,
        });
        //@ts-ignore
        history("/success", { data: response.data });
      } catch (error) {}
    };

    stripeToken && makeRequest();
  }, [stripeToken, totalPrice, history]);

  return (
    <Container>
      <Navigation />
      <Wrapper>
        <Title>Количка</Title>
        <Line></Line>
        <Top>
          <TopButton option="normal" onClick={handleClear}>
            Изчисти количката
          </TopButton>
          <TopText>Продукти ({quantity})</TopText>
          <TopButton option="filled">Продължи пазаруване </TopButton>
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
                          <b>Продукт:</b> {p.title}
                        </ProductName>

                        <ProductQuantity>
                          <b>Количество:</b> {p.quantity} L
                        </ProductQuantity>
                      </Details>
                    </ProductDetails>
                    <ProductPrice>
                      <ProductPriceAmountContainer>
                        <ProductPriceAmount>
                          Бройка: {p.amount}
                        </ProductPriceAmount>
                      </ProductPriceAmountContainer>
                      <Price>Цена: {p.price * p.amount} бгн</Price>
                    </ProductPrice>
                  </Product>
                  <HR />
                </div>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>Поръчка</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Цена:</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Доставка:</SummaryItemText>
                <SummaryItemPrice>$ 10</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Намаление:</SummaryItemText>
                <SummaryItemPrice>$ -2.99</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem option="total">
                <SummaryItemText>Обща сума</SummaryItemText>
                <SummaryItemPrice>
                  {totalPrice?.toFixed(2)} лева
                </SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="QUICK SHOP"
                image="/assets/quickLogo.png"
                billingAddress
                shippingAddress
                description={`Вашате сума е ${totalPrice} лева`}
                amount={totalPrice * 100}
                token={onToken}
                //@ts-ignore
                stripeKey={KEY}
              >
                <Button>Плати</Button>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </WrapperWhite>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
