import Layout from "../../components/layout/layout";
import { Outlet } from "react-router-dom";
import { ShoppingCartProvicer } from "../../context/ShoppingCartContext";
const Index = () => {

  return (
    <ShoppingCartProvicer>
      <Layout>
        <Outlet />
      </Layout>
    </ShoppingCartProvicer>
  );
};
export default Index;
