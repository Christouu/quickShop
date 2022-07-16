import styled from "styled-components";

interface Props {
  status: string;
}

export const Container = styled.div``;

export const CellWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;

export const Status = styled.span`
  color: ${(props: Props) =>
    props.status === "Pending" ? "green" : "goldenrod"};
`;
