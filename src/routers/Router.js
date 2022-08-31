import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
const About = lazy(() => import("../views/client/About"));
const Home = lazy(() => import("../views/client/Home"));
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact  path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
