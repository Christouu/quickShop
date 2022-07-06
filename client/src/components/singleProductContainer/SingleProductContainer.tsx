import { Link } from "react-router-dom";
import {
  Container,
  H2,
  Icon,
  Image,
  Info,
  Wrapper,
} from "./SingleProductContainer.styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SingleProductContainer = ({ info }: any) => {
  console.log(info);

  return (
    <Wrapper>
      <H2></H2>
      <Container>
        <Image
          src="https://i.ytimg.com/vi/VT4I-VSODRE/maxresdefault.jpg"
          alt="product"
        />

        <Info>
          <Icon>
            <Link to={"/"} style={{ textDecoration: "none", color: "blue" }}>
              <ShoppingCartIcon />
            </Link>
          </Icon>
          <Icon>
            <Link to={"/"} style={{ textDecoration: "none", color: "green" }}>
              <SearchIcon />
            </Link>
          </Icon>
          <Icon>
            <Link to={"/"} style={{ textDecoration: "none", color: "red" }}>
              <FavoriteIcon />
            </Link>
          </Icon>
        </Info>
      </Container>
    </Wrapper>
  );
};

export default SingleProductContainer;
