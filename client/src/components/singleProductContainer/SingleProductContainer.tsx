import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import {
  Container,
  H2,
  Icon,
  Image,
  Info,
  SaleLogo,
  Wrapper,
} from "./SingleProductContainer.styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SingleProductContainer = ({ product }: any) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <Wrapper>
      <H2>{product.title}</H2>
      <Container>
        <Image src={product.image} alt="product" />

        {product.onSale && <SaleLogo>Промоция</SaleLogo>}
        <Info>
          <Icon onClick={handleCart}>
            <Link to={""} style={{ textDecoration: "none", color: "blue" }}>
              <ShoppingCartIcon />
            </Link>
          </Icon>
          <Icon>
            <Link
              to={`/products/${product._id}`}
              style={{ textDecoration: "none", color: "green" }}
            >
              <SearchIcon />
            </Link>
          </Icon>
          <Icon>
            <Link to={""} style={{ textDecoration: "none", color: "red" }}>
              <FavoriteIcon />
            </Link>
          </Icon>
        </Info>
      </Container>
    </Wrapper>
  );
};

export default SingleProductContainer;
