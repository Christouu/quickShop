import { Link } from "react-router-dom";
import {
  Badge2,
  BadgeContainer,
  Container,
  Li,
  Links,
  Logo,
  LogoContainer,
  Nav,
  Ul,
} from "./styles";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { RootState } from "../../redux/store";

const Navigation = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <Container>
      <Nav>
        <LogoContainer>
          <Logo src="/assets/quickLogo.png" alt="Quick logo" />
        </LogoContainer>
        <Links>
          <Ul>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Li>Начало</Li>
            </Link>
            <Link
              to={"/products"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Li>Продукти</Li>
            </Link>
            <Link
              to={"/sale"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Li>Продукти на промоция</Li>
            </Link>
            <Link
              to={"/work"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Li>Работа</Li>
            </Link>
            <Link
              to={"/about"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Li>За Нас</Li>
            </Link>
          </Ul>
        </Links>

        <Badge2>
          <Link to={"/cart"} style={{ textDecoration: "none", color: "white" }}>
            <BadgeContainer>
              <Badge badgeContent={cart.quantity} color="primary">
                <ShoppingCartIcon style={{ cursor: "pointer" }} />
              </Badge>
            </BadgeContainer>
          </Link>
          <Ul>
            <Link
              to={"/login"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Li>Вход</Li>
            </Link>
            <Link
              to={"/register"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Li>Регистрация</Li>
            </Link>
          </Ul>
        </Badge2>
      </Nav>
    </Container>
  );
};

export default Navigation;
