import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminProductForm from "../../components/adminProductForm/AdminProductForm";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { Container, ProductContainer } from "./AdminProductFormPage.styles";

const AdminProductFormPage = () => {
  return (
    <>
      <Container>
        <AdminSidebar />
        <ProductContainer>
          <AdminNavbar />
          <AdminProductForm />
        </ProductContainer>
      </Container>
    </>
  );
};

export default AdminProductFormPage;
