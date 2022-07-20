import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
  WrapperWhite,
} from "./ProductInfo.styles";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { publicRequest } from "../../requestMethods";

const ProductInfo: React.FC = () => {
  const [product, setProduct] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/product/find/${id}`);
        console.log(res.data);

        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  const handleQuantity = (string: string) => {
    if (string === "desc") {
      quantity > 1 && setQuantity((prev) => prev - 1);
    } else if (string === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleClick = () => {
    //handle cart
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
      <Navigation />
      <Wrapper>
        <WrapperWhite>
          <ImageContainer>
            <Image src={product.image} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Price>$ {product.price}</Price>
            {product?.description?.map((d: any, index: any) => (
              <Description key={index}>{d}</Description>
            ))}
            <AddContainer>
              <AmountContainer>
                Broika
                <RemoveIcon
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                  onClick={() => handleQuantity("desc")}
                />
                <Amount>{quantity}</Amount>
                <AddIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("inc")}
                />
              </AmountContainer>
              <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </WrapperWhite>
      </Wrapper>
      Add recommended items
      <Footer />
    </Container>
  );
};

export default ProductInfo;
