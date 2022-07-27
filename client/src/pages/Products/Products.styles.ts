import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container2 = styled.div`
  background-color: #fcf1ed;
`;

export const H1 = styled.h1`
  padding: 0px 30px;
  font-size: 44px;
  text-align: center;
`;

export const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 15rem;
  margin-top: 20px;
  margin-bottom: 50px;
  gap: 20px;

  ${mobile({ margin: "0", flexDirection: "column" })}
`;

export const Wrapper = styled.div``;
