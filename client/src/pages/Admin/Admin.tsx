import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { Container, HomeContainer } from "./Admin.styles";

const Admin = () => {
  return (
    <Container>
      <AdminSidebar />
      <HomeContainer>
        <AdminNavbar />
      </HomeContainer>
    </Container>
  );
};

export default Admin;
