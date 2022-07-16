import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  font-family: "Nunito", sans-serif;

  display: flex;
`;

export const HomeContainer = styled.div`
  flex: 6;
`;

export const Widgets = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const Charts = styled.div`
  display: flex;
  padding: 5px 20px;
  gap: 20px;
`;

export const ListContainer = styled.div`
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 20px;
  margin: 20px;
`;

export const ListTitle = styled.div`
  font-weight: 500;
  color: gray;
  margin-bottom: 20px;
  font-size: 20px;
`;
