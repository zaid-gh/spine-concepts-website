import React, { useEffect } from "react";
import { Header, Footer, Breadcrumb } from "./";
import { Outlet, useLocation } from "react-router-dom";

const Layout = ({ menuOptions }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-custom-bg-gray text-custom-dark-gray font-sans">
      <Header menuOptions={menuOptions} />

      <main>
        <Outlet />
      </main>
      <Footer menuOptions={menuOptions} />
    </div>
  );
};

export default Layout;
