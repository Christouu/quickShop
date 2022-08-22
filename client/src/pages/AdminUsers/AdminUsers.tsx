import { useEffect, useState } from "react";
import { privateRequest } from "../../requestMethods";
import { Container, ListContainer } from "./AdminUsers.styles";

import AdminList from "../../components/adminList/AdminList";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await privateRequest.get("user");

        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <Container>
      <AdminSidebar />
      <ListContainer>
        <AdminNavbar />
        <AdminList data={users} type="users" />
      </ListContainer>
    </Container>
  );
};

export default AdminUsers;
