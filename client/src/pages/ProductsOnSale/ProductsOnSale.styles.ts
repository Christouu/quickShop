import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container2 = styled.div`
  background-color: #fcf1ed;
  ${mobile({ dislay: "flex", flexDirection: "column", alignItems: "center" })}
`;

export const H1 = styled.h1`
  padding: 0px 30px;
  font-size: 44px;
  text-align: center;
  ${mobile({ padding: "0" })}
`;

export const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 15px;
`;
