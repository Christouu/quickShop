import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
`;

export const H1 = styled.h1`
  padding: 0px 30px;
  font-size: 44px;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin: 20px 15rem;
  background-color: white;
  border-radius: 20px;
  padding: 10px 40px;
  ${mobile({ margin: "20px 0px" })};
`;

export const Text = styled.p`
  margin: 5rem 0;
  text-align: center;
  font-size: 30px;
  line-height: 1.5;
  padding: 0 150px;
  ${mobile({
    margin: "20px 0",
    fontSize: "22px",
    padding: "20px 10px",
    lineHeight: "1",
  })}
`;

export const Shops = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ShopContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${mobile({ alignItems: "center" })}
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }

  ${mobile({ width: "250px", height: "250px" })}
`;

export const ShopInfo = styled.p`
  margin: 50px 0px;
`;
