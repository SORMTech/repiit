import React from "react";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
