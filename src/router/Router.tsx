import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";

import Coin from "../pages/Coin";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
