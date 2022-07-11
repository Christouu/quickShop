import {
  Bottom,
  Center,
  Hr,
  Li,
  LiSpan,
  Logo,
  Sidebar,
  Top,
  Ul,
} from "./AdminSidebar.styles";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
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
          <Li>
            <DashboardIcon />
            <LiSpan>Dashboard</LiSpan>
          </Li>
          <Li>
            <PersonIcon />
            <LiSpan>Users</LiSpan>
          </Li>
          <Li>
            <InventoryIcon />
            <LiSpan>Products</LiSpan>
          </Li>
          <Li>
            <BorderColorIcon />
            <LiSpan>Orders</LiSpan>
          </Li>
          <Li>
            <LocalShippingIcon />
            <LiSpan>Delivery</LiSpan>
          </Li>
          <Li>
            <QueryStatsIcon />
            <LiSpan>Stats</LiSpan>
          </Li>
          <Li>
            <NotificationsActiveIcon />
            <LiSpan>Notifications</LiSpan>
          </Li>
          <Li>
            <SystemSecurityUpdateGoodIcon />
            <LiSpan>System Health</LiSpan>
          </Li>
          <Li>
            <RssFeedIcon />
            <LiSpan>Logs</LiSpan>
          </Li>
          <Li>
            <SettingsApplicationsIcon />
            <LiSpan>Settings</LiSpan>
          </Li>
          <Li>
            <AccountCircleIcon />
            <LiSpan>Profile</LiSpan>
          </Li>
          <Li>
            <LogoutIcon />
            <LiSpan>Logout</LiSpan>
          </Li>
        </Ul>
      </Center>
      <Bottom>Colors</Bottom>
    </Sidebar>
  );
};

export default AdminSidebar;
