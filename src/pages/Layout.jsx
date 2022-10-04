import React from "react";
import { Outlet } from "react-router-dom";
import Navebar from "./Navebar";
const Layout = () => {
  return (
    <div>
      <header>
        <Navebar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
