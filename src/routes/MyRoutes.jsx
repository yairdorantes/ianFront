import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
    </Routes>
  );
};

export default MyRoutes;
