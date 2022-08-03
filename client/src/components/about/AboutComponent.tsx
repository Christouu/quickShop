import Line from "../line/Line";
import {
  Container,
  H1,
  Image,
  ShopContainer,
  ShopInfo,
  Shops,
  Text,
  Wrapper,
} from "./AboutComponent.styles";

const AboutComponent = () => {
  return (
    <Container data-testid="AboutContainer">
      <H1>За Нас</H1>
      <Line />
      <Wrapper>
        <Text data-testid="AboutContainerText">
          Ние сме верига магазини из цяла София на лесно достъпни места. Нашата
          цел е да предлагаме продукти на достъпни цени. В момента имаме 8
          обекта близост до метростанции. Всеки един магазин има над 10 000+
          продукта от които да избирате. Повечето ни магазини работят 24/7.
          Заповядайте на някой обект и разгледайте наще продукти, цени и
          промоции!
        </Text>
        <Shops data-testid="AboutContainerShops">
          <ShopContainer data-testid="AboutContainerShop">
            <Image
              data-testid="AboutContainerImage"
              src="assets/magazinKonstantinVelichkov.jpg"
            />
            <ShopInfo data-testid="AboutContainerShopInfo">Address</ShopInfo>
          </ShopContainer>
          <ShopContainer>
            <Image src="assets/magazinKonstantinVelichkov.jpg" />
            <ShopInfo>Address</ShopInfo>
          </ShopContainer>
          <ShopContainer>
            <Image src="assets/magazinKonstantinVelichkov.jpg" />
            <ShopInfo>Address</ShopInfo>
          </ShopContainer>
          <ShopContainer>
            <Image src="assets/magazinKonstantinVelichkov.jpg" />
            <ShopInfo>Address</ShopInfo>
          </ShopContainer>
          <ShopContainer>
            <Image src="assets/magazinKonstantinVelichkov.jpg" />
            <ShopInfo>Address</ShopInfo>
          </ShopContainer>
          <ShopContainer>
            <Image src="assets/magazinKonstantinVelichkov.jpg" />
            <ShopInfo>Address</ShopInfo>
          </ShopContainer>
          <ShopContainer>
            <Image src="assets/magazinKonstantinVelichkov.jpg" />
            <ShopInfo>Address</ShopInfo>
          </ShopContainer>
          <ShopContainer>
            <Image src="assets/magazinKonstantinVelichkov.jpg" />
            <ShopInfo>Address</ShopInfo>
          </ShopContainer>
        </Shops>
      </Wrapper>
    </Container>
  );
};

export default AboutComponent;
