import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../router";
import { useNavigate } from "react-router-dom";

import "./Footer.scss";

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer bg-dark">
      <nav className="navbar navbar-dark container-fluid container-xl pt-xl-2">
        <div className="nav-footer col mt-2 mb-4">
          <span
            onClick={() => navigate("/")}
            className="text-white text-decoration-none"
          >
            <h2 className="logo m-0">
              <span>G</span>-Play
            </h2>
          </span>
        </div>

        <div className="navbar-main row w-100 mx-auto">
          <div className="row">
            <div className="navbar-link mb-3 col-sm col-md-5 col-lg-4">
              <h2>Navigation</h2>
              <ul className="navbar-nav ps-1">
                <li className="nav-item">
                  <Link className="nav-link nav-link--home" to={ROUTE.HOME}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav-link--catalog"
                    to={ROUTE.CATALOG}
                  >
                    Catalog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav-link--categories"
                    to={ROUTE.CATALOG}
                  >
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav-link--genres"
                    to={ROUTE.CATALOG}
                  >
                    Genres
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-partners col-sm col-md-5 col-md-4">
              <h2>Partners</h2>
              <ul className="navbar-nav ps-1">
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTE.HOME}>
                    Steam
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTE.HOME}>
                    Epic Games
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTE.HOME}>
                    Origin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={ROUTE.HOME}>
                    Uplay
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}
