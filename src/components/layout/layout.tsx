import React from "react";
import Footer from "./footer";
import Header from "./header";
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
type Props = {
 children:JSX.Element|JSX.Element[]
};
const Layout:React.FC<Props>= ({ children }) => {
  
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
