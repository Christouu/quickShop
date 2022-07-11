import styled from "styled-components";

export const Sidebar = styled.div`
  flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
  background-color: white;
`;

export const Top = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #6439ff;
`;

export const Hr = styled.hr`
  height: 0;
  border: 0.5px solid rgb(230, 227, 227);
`;

export const Center = styled.div`
  padding-left: 10px;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-left: 5px;

  &:hover {
    background-color: #ece8ff;
  }
`;

export const LiSpan = styled.span`
  margin-left: 5px;
  font-size: 18px;
  font-weight: 600;
  color: #888;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const ColorOption = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #7452f8;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:nth-child(1) {
    background-color: whitesmoke;
  }
  &:nth-child(2) {
    background-color: black;
  }
  &:nth-child(3) {
    background-color: pink;
  }
`;
