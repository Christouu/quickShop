import styled from "styled-components";

export const Wrapper = styled.div``;

export const H2 = styled.h2`
  text-align: center;
  max-width: 300px;
  max-height: 45px;
`;

export const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; //#f5fbfb; */
  background: rgb(255, 244, 9);
  background: linear-gradient(
    329deg,
    rgba(255, 244, 9, 1) 17%,
    rgba(255, 3, 3, 1) 100%
  );
  position: relative;
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 300px;
  position: relative;
`;

export const Image = styled.img`
  height: 75%;

  z-index: 2;
  max-width: 280px;
  max-height: 280px;
  object-fit: contain;
`;

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 1;
    border-radius: 10px;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;

export const SaleLogo = styled.div`
  position: absolute;
  z-index: 100;
  background-color: black;
  color: white;
  font-size: 30px;
  padding: 5px 10px;
  border-radius: 10px;
  top: 0;
  left: 0;
`;
