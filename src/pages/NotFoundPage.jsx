import React from "react";
import { useLocation } from "react-router";
import Navigationbar from "../components/Navigationbar";

function NotFoundPage() {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <>
      <Navigationbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>404 — Page not found</h2>
            <p>
              No match found for <code>{location.pathname}</code>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
