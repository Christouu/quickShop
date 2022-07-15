import {
  Amount,
  Bottom,
  Container,
  Description,
  FeaturedChart,
  H1,
  Item,
  ItemResult,
  ItemTitle,
  ResultAmount,
  Summary,
  Title,
  Top,
} from "./AdminFeatured.styles";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AdminFeatured = () => {
  return (
    <Container>
      <Top>
        <H1>Total Revenue</H1>
        <MoreVertIcon fontSize="medium" />
      </Top>
      <Bottom>
        <FeaturedChart>
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </FeaturedChart>
        <Title>Total sales made today.</Title>
        <Amount>$420</Amount>
        <Description>
          adsasdasdasdsadasdsadasdsadasdsadsadasfwqfwqqqwrfqhasudgasou
          gaudpisfgwaepiuytgfuiewgfuadsa
        </Description>

        <Summary>
          <Item>
            <ItemTitle>Target</ItemTitle>
            <ItemResult arrow="negative">
              <KeyboardArrowDownIcon />
              <ResultAmount>$12k</ResultAmount>
            </ItemResult>
          </Item>
          <Item>
            <ItemTitle>Last Week</ItemTitle>
            <ItemResult arrow="negative">
              <KeyboardArrowDownIcon />
              <ResultAmount>$8k</ResultAmount>
            </ItemResult>
          </Item>
          <Item>
            <ItemTitle>Last Month</ItemTitle>
            <ItemResult arrow="positive">
              <KeyboardArrowUpIcon />
              <ResultAmount>$18k</ResultAmount>
            </ItemResult>
          </Item>
        </Summary>
      </Bottom>
    </Container>
  );
};

export default AdminFeatured;
