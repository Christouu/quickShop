import Line from "../line/Line";
import {
  Container,
  H1,
  Image,
  Info,
  Text,
  Wrapper,
} from "./WorkComponent.styles";

const WorkComponent = () => {
  return (
    <Container>
      <H1>Работа при нас</H1>
      <Line />
      <Wrapper>
        <Info>
          <Text>
            Има възможност да започнете работа при нас на някой от нашите обекти
            или в склад. Има възможност за дневни или нощни смени.
          </Text>
          <Image
            src="assets/snimkaForInfoComponent.jpg"
            alt="Picture for Work"
          />
        </Info>
        <Info>
          <Image
            src="assets/snimkaForInfoComponent.jpg"
            alt="Picture for Work"
          />
          <Text>
            Ще работите с млади колеги и в забавна атмосфера. Работите по 2 на
            обект
          </Text>
        </Info>
        <Info>
          <Text>
            Ако имате интерес или имате още въпроси потърсете ни на 37621321
          </Text>
          <Image
            src="assets/snimkaForInfoComponent.jpg"
            alt="Picture for Work"
          />
        </Info>
      </Wrapper>
    </Container>
  );
};

export default WorkComponent;
