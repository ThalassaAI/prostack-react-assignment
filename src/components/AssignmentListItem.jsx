import React from "react";
import { Link } from "react-router";

function AssignmentListItem({ link, title, description, icon }) {
  return (
    <Link to={link} className="text-decoration-none">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">
            {title}
            <i className={[icon, "ms-2"].join(" ")}></i>
          </h5>
          <p className="card-text text-secondary">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default AssignmentListItem;
