import styled from "styled-components";
import { mobile } from "../../responsive";

type PropDir = {
  direction: string;
};
type PropSlide = {
  slideIndex: number;
};
type PropsBG = {
  bg: string;
};

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div<PropDir>`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 10;
`;

export const Wrapper = styled.div<PropSlide>`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div<PropsBG>`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const Image = styled.img`
  height: 80%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({ display: "none" })}
`;

export const Title = styled.h2`
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 30px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s all ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;
