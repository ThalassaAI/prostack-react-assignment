import React from "react";
// import reactSvg from "../assets/react.svg";
import grokSvg from "../assets/grok.svg";
import { Link } from "react-router";
// bg - body - tertiary;
function Navigationbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body "
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center gap-1" to={"/"}>
          <img
            src={grokSvg}
            alt="React Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
            style={{ filter: "invert(1)" }}
          />
          Prostack Academy
        </Link>
      </div>
    </nav>
  );
}

export default Navigationbar;
