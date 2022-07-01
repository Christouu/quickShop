import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const H1 = styled.h1`
  padding: 0px 30px;
  font-size: 44px;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin: 0 15rem;
`;

export const Text = styled.p`
  margin: 5rem 0;
  text-align: center;
  font-size: 30px;
  line-height: 1.5;
  padding: 0 150px;
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
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

export const ShopInfo = styled.p`
  margin: 50px 0px;
`;
