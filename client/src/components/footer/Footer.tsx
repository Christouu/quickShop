import { Link } from "react-router-dom";
import {
  Container,
  Description,
  DescriptionItem,
  H3,
  Info,
  Li,
  Paragraph,
  Ul,
} from "./Footer.styles";

const Footer = () => {
  return (
    <Container data-testid="FooterContainer">
      <Info data-testid="infoItem">
        <H3 data-testid="footerHeadings">За Нас</H3>
        <Description>
          Обичаме работата си, а вие ще обикнете начина, по който работим!
        </Description>
      </Info>

      <Info data-testid="infoItem">
        <H3 data-testid="footerHeadings">Свържете се с нас</H3>
        <Description>
          <DescriptionItem data-testid="descriptionItem">
            <Paragraph>аддрес</Paragraph>
          </DescriptionItem>
          <DescriptionItem data-testid="descriptionItem">
            <Paragraph>емайл</Paragraph>
          </DescriptionItem>
          <DescriptionItem data-testid="descriptionItem">
            <Paragraph>телефон</Paragraph>
          </DescriptionItem>
        </Description>
      </Info>

      <Info data-testid="infoItem">
        <H3 data-testid="footerHeadings">Последвайте ни</H3>
        <Description>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"https://www.facebook.com/QUICK-SHOP-111832480290672"}
            target="_blank"
          >
            asd
          </Link>
        </Description>
      </Info>

      <Info data-testid="infoItem">
        <H3 data-testid="footerHeadings">Линкове</H3>
        <Description>
          <Ul data-testid="footerUl">
            <Li data-testid="footerLi">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Начало
              </Link>
            </Li>
            <Li data-testid="footerLi">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Продукти
              </Link>
            </Li>
            <Li data-testid="footerLi">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Продукти на промоция
              </Link>
            </Li>
            <Li data-testid="footerLi">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Магазини
              </Link>
            </Li>
            <Li data-testid="footerLi">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Работа при нас
              </Link>
            </Li>
            <Li data-testid="footerLi">
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Контакти
              </Link>
            </Li>
          </Ul>
        </Description>
      </Info>
    </Container>
  );
};

export default Footer;
