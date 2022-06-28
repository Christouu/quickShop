import { Link } from "react-router-dom"
import { Container, Description, DescriptionItem, H3, Info, Li, Paragraph, Ul } from "./Footer.styles"


const Footer = () => {
  return (
    <Container>
        <Info>
            <H3>За Нас</H3>
            <Description> Обичаме работата си, а вие ще обикнете начина, по който работим!</Description>
        </Info>

        <Info>
            <H3>Свържете се с нас</H3>
            <Description>
                    <DescriptionItem>
                        <Paragraph>аддрес</Paragraph>
                    </DescriptionItem>
                    <DescriptionItem>
                        <Paragraph>емайл</Paragraph>
                    </DescriptionItem>
                    <DescriptionItem>
                        <Paragraph>телефон</Paragraph>
                    </DescriptionItem>
            </Description>
        </Info>

        <Info>
            <H3>Последвайте ни</H3>
            <Description>
                <Link style={{ textDecoration: "none", color: "white" }} to={'https://www.facebook.com/QUICK-SHOP-111832480290672'} target="_blank">asd</Link>
            </Description>
        </Info>

        <Info>
            <H3>Линкове</H3>
            <Description>
                <Ul>
                    <Li>
                        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Начало</Link>
                    </Li>
                    <Li>
                        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Продукти</Link>
                    </Li>
                    <Li>
                        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Продукти на промоция</Link>
                    </Li>
                    <Li>
                        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Магазини</Link>
                    </Li>
                    <Li>
                        <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Работа при нас</Link>
                    </Li>
                    <Li>
                        <Link to={'/'}style={{ textDecoration: "none", color: "white" }}>Контакти</Link>
                    </Li>
                    
                </Ul>
            </Description>
        </Info>
    </Container>
  )
}

export default Footer