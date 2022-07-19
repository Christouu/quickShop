import { useEffect, useState } from "react";
import AdminList from "../../components/adminList/AdminList";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { publicRequest } from "../../requestMethods";
import { Container, ListContainer } from "./AdminProducts.styles";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await publicRequest.get("product/find");
        console.log(response.data);

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <Container>
      <AdminSidebar />
      <ListContainer>
        <AdminNavbar />
        <AdminList data={products} type="products" />
      </ListContainer>
    </Container>
  );
};

export default AdminProducts;
