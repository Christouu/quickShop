import {
  Block,
  Container,
  H1,
  ImgContainer,
  Li,
  Line,
  Text,
  Ul,
} from "./Info.styles";

import DoneIcon from "@mui/icons-material/Done";

const Info = () => {
  return (
    <Container>
      <H1>Защо да пазарувате при нас ?</H1>
      <Line />

      <Block>
        <Ul>
          <Li>
            <DoneIcon
              style={{
                color: "red",
                paddingBottom: "20px",
                paddingRight: "10px",
              }}
            />
            <Text>Aтрактивни оферти и отстъпки</Text>
          </Li>
          <Li>
            <DoneIcon
              style={{
                color: "red",
                paddingBottom: "20px",
                paddingRight: "10px",
              }}
            />
            <Text>Над 1800 продукта предлагани в QUICK</Text>
          </Li>
          <Li>
            <DoneIcon
              style={{
                color: "red",
                paddingBottom: "20px",
                paddingRight: "10px",
              }}
            />
            <Text>Aтрактивни оферти и отстъпки</Text>
          </Li>
        </Ul>
        <ImgContainer src="assets/quickCoffee.jpg" />
      </Block>
    </Container>
  );
};

export default Info;
