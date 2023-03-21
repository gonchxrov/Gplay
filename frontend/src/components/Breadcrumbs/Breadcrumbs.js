import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumbs.scss";

export function Breadcrumbs({ breadcrumbs }) {
  return (
    <ul className="breadcrumbs col-9 mx-auto">
      {breadcrumbs.map((breadcrumb) => (
        <li className="breadcrumb" key={breadcrumb.title}>
          <Link to={breadcrumb.route}>{breadcrumb.title}</Link>
        </li>
      ))}
    </ul>
  );
}
