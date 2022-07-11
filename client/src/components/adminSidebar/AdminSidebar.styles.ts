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

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const LiSpan = styled.span``;

export const Bottom = styled.div``;
