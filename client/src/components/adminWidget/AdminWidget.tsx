import {
  Counter,
  Left,
  Link,
  Percentage,
  Right,
  Title,
  Widget,
} from "./AdminWidget.styles";

import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";

const AdminWidget = ({ type }: any) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            style={{
              fontSize: "22px",
              padding: "5px",
              backgroundColor: "rgba(128, 0, 128, 0.342)",
              borderRadius: "5px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: true,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            style={{
              fontSize: "22px",
              padding: "5px",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              borderRadius: "5px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "Earnings",
        isMoney: false,
        link: "View net earnings",
        icon: (
          <AttachMoneyOutlinedIcon
            style={{
              fontSize: "22px",
              padding: "5px",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
              color: "green",
              borderRadius: "5px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Balance",
        isMoney: true,
        link: "View monthly balance",
        icon: (
          <BalanceOutlinedIcon
            style={{
              fontSize: "22px",
              padding: "5px",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              borderRadius: "5px",
              alignSelf: "flex-end",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Widget>
      <Left>
        <Title>{data?.title}</Title>
        <Counter>{data?.isMoney && "$"}201232</Counter>
        <Link>{data?.link}</Link>
      </Left>
      <Right>
        <Percentage positive>
          <KeyboardArrowUpOutlinedIcon />
          20%
        </Percentage>
        {data?.icon}
      </Right>
    </Widget>
  );
};

export default AdminWidget;
