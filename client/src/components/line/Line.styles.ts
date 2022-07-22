import styled from "styled-components";
import { mobile } from "../../responsive";

export const LineComponent = styled.div`
  border: 5px solid #f09d51;
  width: 10%;
  border-radius: 10px;
  margin: 0 auto;
  ${mobile({ width: "30%", margin: "10px auto" })}
`;
