import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.nav`
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
  ${mobile({ height: "50px", width: "100%" })}
`;

export const Nav = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;
  ${mobile({ height: "50px", width: "100%" })}
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
  ${mobile({ height: "50px", width: "50px" })}
`;

export const Links = styled.div`
  ${mobile({ display: "none" })}
`;

export const Ul = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  height: 100%;
  list-style: none;
  padding: 40px 20px;
  transition: 0.5s all ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Badge2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ display: "none" })}
`;

export const BadgeContainer = styled.div`
  transition: 0.5s all ease-in-out;

  &:hover {
    transform: scale(1.4);
  }
`;
