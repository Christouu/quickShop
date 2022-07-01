import styled from "styled-components";

export const Container = styled.nav`
  height: 100px;
  width: 100%;
  background-color: black;
  color: white;
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
  z-index: 100;
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
`;

export const Links = styled.div``;

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

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BadgeContainer = styled.div`
  transition: 0.5s all ease-in-out;

  &:hover {
    transform: scale(1.4);
  }
`;
