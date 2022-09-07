import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import Coin from "../pages/Coin";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coin/:coinId/*" element={<Coin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
