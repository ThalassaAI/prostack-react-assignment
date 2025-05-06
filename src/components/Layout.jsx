import React from "react";
import Navigationbar from "./Navigationbar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Navigationbar />
      <Outlet />
    </>
  );
}

export default Layout;
