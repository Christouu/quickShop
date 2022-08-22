import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminList from "../../components/adminList/AdminList";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import { getProducts } from "../../redux/apiCalls";
import { RootState } from "../../redux/store";
import { Container, ListContainer } from "./AdminProducts.styles";

const AdminProducts = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

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
