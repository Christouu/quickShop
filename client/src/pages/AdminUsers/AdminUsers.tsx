import AdminList from "../../components/adminList/AdminList";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { Container, ListContainer } from "./AdminUsers.styles";

const AdminUsers = () => {
  return (
    <Container>
      <AdminSidebar />
      <ListContainer>
        <AdminNavbar />
        <AdminList />
      </ListContainer>
    </Container>
  );
};

export default AdminUsers;
