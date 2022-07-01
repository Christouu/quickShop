import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 0px;
  width: 100%;
  background-color: #fcf1ed;
`;

export const H1 = styled.h1`
  padding: 0px 30px;
  font-size: 44px;
  text-align: center;
`;

export const InfoContainer = styled.div`
  padding: 0px 1rem;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 20px;
  justify-content: space-around;
  margin: 2rem 15rem;
`;

export const Button = styled.button`
  padding: 20px;
  margin-left: 90rem;
  margin-bottom: 30px;
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  transition: 0.5s all ease;
  font-size: 20px;

  &:hover {
    transform: scale(1.2);
  }
`;
