import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding-bottom: 100px;
  padding-top: 50px;
`;

export const H1 = styled.h1`
  text-align: center;
  margin-top: 50px;
  font-size: 44px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "32px" })}
`;

export const Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 80px;
  margin: 0 auto;
  ${mobile({ flexDirection: "column" })}
`;

export const InfoContainer = styled.div``;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Text = styled.p`
  font-size: 30px;
  margin-top: 20px;
  margin-left: 10px;
  margin-bottom: 40px;
  ${mobile({ fontSize: "20px" })}
`;

export const ImgContainer = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 20px;
  ${mobile({ width: "300px", height: "300px" })}
`;
