import React from "react";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
