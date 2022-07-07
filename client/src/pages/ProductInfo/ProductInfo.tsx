import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  AddContainer,
  Amount,
  AmountContainer,
  Button,
  Container,
  Desc,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "./ProductInfo.styles";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";

const ProductInfo: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  //   useEffect(() => {
  //     const getProduct = async () => {
  //       try {
  //         const res = await publicRequest.get(`/products/find/${id}`);

  //         setProduct(res.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     getProduct();
  //   }, [id]);

  const handleQuantity = (string: string) => {
    if (string === "desc") {
      quantity > 1 && setQuantity((prev) => prev - 1);
    } else if (string === "inc") {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleClick = () => {
    //handle cart
    dispatch(addProduct({ ...product, quantity, size, color }));
  };

  return (
    <Container>
      <Navigation />

      <Wrapper>
        <ImageContainer>
          <Image src={product.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c: string) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((c: string) => (
                  <FilterSizeOption key={c}>{c}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon
                style={{ cursor: "pointer" }}
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
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default ProductInfo;
