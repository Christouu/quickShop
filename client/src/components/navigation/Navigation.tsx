import { Link } from "react-router-dom";
import {
  Badge,
  BadgeContainer,
  Container,
  Li,
  Links,
  Logo,
  LogoContainer,
  Nav,
  Ul,
} from "./styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navigation = () => {
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
              to={"/productsSale"}
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

        <Badge>
          <BadgeContainer>
            <ShoppingCartIcon style={{ cursor: "pointer" }} />
          </BadgeContainer>
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
        </Badge>
      </Nav>
    </Container>
  );
};

export default Navigation;
