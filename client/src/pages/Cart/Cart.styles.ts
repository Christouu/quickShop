import styled from "styled-components";

interface Props {
  option?: string;
}

export const Container = styled.div`
  background-color: #fcf1ed;
`;

export const Wrapper = styled.div`
  padding: 20px 15rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 44px;
`;

export const WrapperWhite = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 40px;
`;

export const TopButton = styled.button<Props>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props: Props) => props.option === "filled" && "none"};
  background-color: ${(props: Props) =>
    props.option === "filled" ? "black" : "white"};

  color: ${(props: Props) => (props.option === "filled" ? "white" : "black")};
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

export const TopText = styled.span`
  text-decoration: none;
  cursor: pointer;
  font-size: 26px;
  text-align: center;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductQuantity = styled.span``;

export const ProductPrice = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductPriceAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductPriceAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

export const Price = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin: 5px;
`;

export const HR = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const SummaryTitle = styled.h1`
  font-weight: 500;
`;

export const SummaryItem = styled.div<Props>`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.option === "total" && "700"};
  font-size: ${(props) => props.option === "total" && "26px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
