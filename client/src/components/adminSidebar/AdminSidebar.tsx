import { Link } from "react-router-dom";
import {
  Bottom,
  Center,
  ColorOption,
  Hr,
  Li,
  LiSpan,
  Logo,
  Sidebar,
  Title,
  Top,
  Ul,
} from "./AdminSidebar.styles";

import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminSidebar = () => {
  return (
    <Sidebar>
      <Top>
        <Logo>QUICK Shop</Logo>
      </Top>
      <Hr />
      <Center>
        <Ul>
          <Title>Main</Title>
          <Link to={"/admin"} style={{ textDecoration: "none" }}>
            <Li>
              <DashboardIcon style={{ color: "#6439ff" }} />
              <LiSpan>Dashboard</LiSpan>
            </Li>
          </Link>
          <Title>Lists</Title>
          <Link to={"/admin/users"} style={{ textDecoration: "none" }}>
            <Li>
              <PersonIcon style={{ color: "#6439ff" }} />
              <LiSpan>Users</LiSpan>
            </Li>
          </Link>
          <Link to={"/admin/products"} style={{ textDecoration: "none" }}>
            <Li>
              <InventoryIcon style={{ color: "#6439ff" }} />
              <LiSpan>Products</LiSpan>
            </Li>
          </Link>
          <Li>
            <BorderColorIcon style={{ color: "#6439ff" }} />
            <LiSpan>Orders</LiSpan>
          </Li>
          <Li>
            <LocalShippingIcon style={{ color: "#6439ff" }} />
            <LiSpan>Delivery</LiSpan>
          </Li>
          <Title>Usefull Links</Title>
          <Li>
            <QueryStatsIcon style={{ color: "#6439ff" }} />
            <LiSpan>Stats</LiSpan>
          </Li>
          <Li>
            <NotificationsActiveIcon style={{ color: "#6439ff" }} />
            <LiSpan>Notifications</LiSpan>
          </Li>
          <Title>Service</Title>
          <Li>
            <SystemSecurityUpdateGoodIcon style={{ color: "#6439ff" }} />
            <LiSpan>System Health</LiSpan>
          </Li>
          <Li>
            <RssFeedIcon style={{ color: "#6439ff" }} />
            <LiSpan>Logs</LiSpan>
          </Li>
          <Li>
            <SettingsApplicationsIcon style={{ color: "#6439ff" }} />
            <LiSpan>Settings</LiSpan>
          </Li>
          <Title>User</Title>
          <Li>
            <AccountCircleIcon style={{ color: "#6439ff" }} />
            <LiSpan>Profile</LiSpan>
          </Li>
          <Li>
            <LogoutIcon style={{ color: "#6439ff" }} />
            <LiSpan>Logout</LiSpan>
          </Li>
        </Ul>
      </Center>
      <Bottom>
        <ColorOption></ColorOption>
        <ColorOption></ColorOption>
        <ColorOption></ColorOption>
      </Bottom>
    </Sidebar>
  );
};

export default AdminSidebar;
