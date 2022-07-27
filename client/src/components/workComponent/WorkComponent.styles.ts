import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  margin: 0 15rem;
  background-color: #fcf1ed;
  ${mobile({ margin: "0" })}
`;

export const H1 = styled.h1`
  padding: 0px 30px;
  font-size: 44px;
  text-align: center;
`;

export const Wrapper = styled.div`
  border-radius: 20px;
  background-color: white;
  margin-top: 30px;
  margin-bottom: 20px;
  ${mobile({ display: "flex", flexDirection: "column", marginTop: "10px" })}
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  ${mobile({ flexDirection: "column", justifyContent: "center" })}
`;

export const Text = styled.p`
  font-size: 30px;
  line-height: 1.5;
  padding: 0 50px;
  flex: 5;
  ${mobile({ fontSize: "22px", padding: "0 5px", textAlign: "center" })}
`;

export const Image = styled.img`
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 20px;
  flex: 2;
  ${mobile({ height: "250px", width: "250px" })}
`;
