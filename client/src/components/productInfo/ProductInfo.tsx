import { Circle, Container, Icon, Image, Info } from "./ProductInfo.styles";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

interface Props {
  img: string;
  id: string;
}

const ProductInfo: React.FC<Props> = ({ img, id }) => {
  return (
    <Container data-testid="productInfo">
      <Circle />
      <Image src={img} />
      <Info>
        <Icon data-testid="icon">
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon data-testid="icon">
          <Link to={`/product/${id}`}>
            <SearchIcon />
          </Link>
        </Icon>
        <Icon data-testid="icon">
          <FavoriteBorderIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductInfo;
