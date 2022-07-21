import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  background-color: #313638;
  width: 100%;
  height: 350px;
  ${mobile({ flexDirection: "column", height: "100%" })}
`;

export const Info = styled.div`
  color: white;
  padding: 4rem 5rem;
  flex: 1;
  ${mobile({ padding: "10px 20px" })}
`;

export const H3 = styled.h3`
  border-left: 3px solid #f09d51;
  padding-left: 10px;
`;

export const Description = styled.div`
  margin-left: 10px;
`;

export const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin-top: 15px;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin-bottom: 10px;
`;
