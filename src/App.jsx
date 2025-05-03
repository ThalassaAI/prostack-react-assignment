import React from "react";
import { Outlet } from "react-router";
import Navigationbar from "./components/Navigationbar";

function App() {
  return (
    <>
      <Navigationbar />
      <Outlet />
    </>
  );
}

export default App;
