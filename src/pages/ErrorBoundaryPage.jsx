import React from "react";
import { useRouteError } from "react-router";
import Navigationbar from "../components/Navigationbar";

function ErrorBoundaryPage() {
  const error = useRouteError();

  console.log(error);
  return (
    <>
      <Navigationbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Something went wrong</h4>
              <p>
                {error.statusText ||
                  error.message ||
                  "An unexpected error occurred."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorBoundaryPage;
