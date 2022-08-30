import React from "react";
import Footer from "./footer";
import Header from "./header";
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
