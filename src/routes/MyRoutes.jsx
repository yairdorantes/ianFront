import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import Home from "../components/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      {/* <Route path="/carrito" element={<Cart />} /> */}
    </Routes>
  );
};

export default MyRoutes;
