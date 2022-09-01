import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route,Switch, Navigate } from "react-router-dom";

const About = lazy(() => import("../views/client/About"));
const Home = lazy(() => import("../views/client/Home"));
const AddProduct = lazy(() => import("../views/admin/products/AddFormik"));
const Index = lazy(() => import("../views/admin/Index"));
const Login = lazy(() => import("../views/admin/Login"));
const ListProductAdmin = lazy(() => import("../views/admin/products/List"));
const Routers = () => {
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Index />}>
            <Route path="products" element={<ListProductAdmin />} />
            <Route path="products/add" element={<AddProduct />} />
          </Route>
          <Route path="admin/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routers;
