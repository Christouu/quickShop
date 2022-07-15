import AdminChart from "../../components/adminChart/AdminChart";
import AdminFeatured from "../../components/adminFeatured/AdminFeatured";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import AdminWidget from "../../components/adminWidget/AdminWidget";
import { Charts, Container, HomeContainer, Widgets } from "./Admin.styles";

const Admin = () => {
  return (
    <Container>
      <AdminSidebar />
      <HomeContainer>
        <AdminNavbar />
        <Widgets>
          <AdminWidget type="user" />
          <AdminWidget type="order" />
          <AdminWidget type="earnings" />
          <AdminWidget type="balance" />
        </Widgets>
        <Charts>
          <AdminFeatured />
          <AdminChart aspect={2 / 1} title={"Last 6 months(revenue)"} />
        </Charts>
      </HomeContainer>
    </Container>
  );
};

export default Admin;
