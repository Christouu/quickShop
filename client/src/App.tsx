import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Navigate, Route, Routes } from "react-router-dom";

import Work from "./pages/Work/Work";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Success from "./pages/Success/Success";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import NotFound from "./components/notFound/NotFound";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import AdminProducts from "./pages/AdminProducts/AdminProducts";
import ProductsOnSale from "./pages/ProductsOnSale/ProductsOnSale";
import AdminProductFormPage from "./pages/AdminProductFormPage/AdminProductForm";

function App() {
  const user = useSelector((state: RootState) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductInfo />} />
      <Route path="/work" element={<Work />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/success" element={<Success />} />
      <Route path="/sale" element={<ProductsOnSale />} />
      <Route path="/admin">
        <Route index element={<Admin />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="products/:id" element={<AdminProductFormPage />} />
      </Route>

      <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />
      <Route
        path="/register"
        element={user ? <Navigate to={"/"} /> : <Register />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
