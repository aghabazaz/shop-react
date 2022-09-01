import Layout from "../../components/layout/admin/Layout";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("user") ?? "";
    if (data) {
      const user = JSON.parse(data);
      if (user && user.token) {
        return;
      }
    }
    navigate("/admin/login");
  }, []);
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
export default Index;
