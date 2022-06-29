import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/notFound/NotFound";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
