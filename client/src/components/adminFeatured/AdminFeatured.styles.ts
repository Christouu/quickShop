import styled from "styled-components";

interface Props {
  arrow: string;
}

export const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px 30px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
`;

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

export const Bottom = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FeaturedChart = styled.div`
  width: 150px;
  height: 150px;
`;

export const Title = styled.p`
  font-weight: 500;
  color: gray;
`;

export const Amount = styled.p`
  font-size: 30px;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 18px;
  text-align: center;
`;

export const Summary = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.div`
  text-align: center;
`;

export const ItemTitle = styled.div`
  font-size: 20px;
  color: gray;
`;

export const ItemResult = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: ${(props: Props) => (props.arrow === "positive" ? "green" : "red")};
`;

export const ResultAmount = styled.div``;
