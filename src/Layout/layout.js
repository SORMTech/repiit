import React from "react";
import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ user, children }) => {
  
  return (
    <div className='max-w-7xl mx-auto'>
      <Nav user={user} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
