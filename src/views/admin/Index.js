import Layout from "../../components/layout/admin/Layout";
import { Outlet } from "react-router-dom";
const Index = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
export default Index;
