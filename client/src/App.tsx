import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import "./App.css";
import NotFound from "./components/notFound/NotFound";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import Work from "./pages/Work/Work";
import ProductsOnSale from "./pages/ProductsOnSale/ProductsOnSale";
import Admin from "./pages/Admin/Admin";
import AdminUsers from "./pages/AdminUsers/AdminUsers";

function App() {
  const user = useSelector((state: RootState) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sale" element={<ProductsOnSale />} />
      <Route path="/products/:id" element={<ProductInfo />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin">
        <Route index element={<Admin />} />
        <Route path="users" element={<AdminUsers />} />
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
