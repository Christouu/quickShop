import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  background-color: #fcf1ed;
`;

export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "0" })}
`;

export const WrapperWhite = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 0px 15rem;
  display: flex;
  ${mobile({
    flexDirection: "column",
    margin: "0",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: contain;
  ${mobile({ height: "250px", width: "250px" })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  margin-bottom: 40px;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const AddContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  ${mobile({
    justifyContent: "center",
    marginBottom: "10px",
    flexDirection: "column",
  })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

export const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
  }

  ${mobile({ width: "100%", margin: "0 auto" })}
`;
