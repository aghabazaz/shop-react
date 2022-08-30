import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
const About = lazy(() => import("../views/about"));
const Home = lazy(() => import("../views/home"));
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
