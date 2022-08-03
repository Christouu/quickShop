import {
  Block,
  Container,
  H1,
  ImgContainer,
  Li,
  Text,
  Ul,
} from "./Info.styles";

import DoneIcon from "@mui/icons-material/Done";
import Line from "../line/Line";

const Info = () => {
  return (
    <Container data-testid="infoContainer">
      <H1 data-testid="infoHeading">Защо да пазарувате при нас ?</H1>
      <Line />

      <Block>
        <Ul data-testid="infoUl">
          <Li data-testid="infoLi">
            <DoneIcon
              style={{
                color: "red",
                paddingBottom: "20px",
                paddingRight: "10px",
              }}
              data-testid="infoIcon"
            />
            <Text data-testid="infoText">Aтрактивни оферти и отстъпки</Text>
          </Li>
          <Li data-testid="infoLi">
            <DoneIcon
              style={{
                color: "red",
                paddingBottom: "20px",
                paddingRight: "10px",
              }}
              data-testid="infoIcon"
            />
            <Text data-testid="infoText">
              Над 1800 продукта предлагани в QUICK
            </Text>
          </Li>
          <Li data-testid="infoLi">
            <DoneIcon
              style={{
                color: "red",
                paddingBottom: "20px",
                paddingRight: "10px",
              }}
              data-testid="infoIcon"
            />
            <Text data-testid="infoText">Aтрактивни оферти и отстъпки</Text>
          </Li>
        </Ul>
        <ImgContainer src="assets/quickCoffee.jpg" />
      </Block>
    </Container>
  );
};

export default Info;
