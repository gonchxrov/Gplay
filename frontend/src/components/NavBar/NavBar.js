import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setIsAuth,
  selectIsAdmin,
  unSetUser,
  unSetPhoto,
  selectIsAuth,
  selectUser,
} from "../../store/User";
import { ROUTE } from "../../router";
import { Search } from "../Search/Search";

import "./NavBar.scss";

export function NavBar() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);
  const user = useSelector(selectUser);
  const ref = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const logOut = () => {
    localStorage.clear();
    dispatch(unSetUser());
    dispatch(unSetPhoto());
    dispatch(setIsAuth(false));
  };

  const handleClickOutside = (event) => {
    const clickedOnDropdown =
      event.target.parentNode.classList.contains("dropdown-toggle") ||
      event.target.parentNode.classList.contains("dropdown");

    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !clickedOnDropdown
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <nav className="navbar navbar-dark d-flex flex-wrap align-items-center justify-content-start pt-xl-2">
      <div className="nav-header col col-xl-1 d-flex align-items-center justify-content-between my-2 my-xl-0">
        <Link to={ROUTE.HOME} className="text-white text-decoration-none">
          <h2 className="logo m-0">
            <span>G</span>-Play
          </h2>
        </Link>
        <button
          onClick={() => setShowMobileDropdown(!showMobileDropdown)}
          className="navbar-toggler d-xl-none"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        className={`navbar-main row col-xl w-100 mx-auto d-xl-block  ${
          !showMobileDropdown ? "collapse" : ""
        }`}
      >
        <div className="row">
          <ul className="navbar-nav col-xl-6 offset-xl-2 me-auto mb-3 mb-xl-0 w-xl-100 d-xl-flex flex-xl-row justify-content-xl-between order-1 order-xl-2">
            <li className="nav-item">
              <Link className="nav-link nav-link--home" to={ROUTE.HOME}>
                <i className="fas fa-home"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link--catalog" to={ROUTE.CATALOG}>
                <i className="fas fa-list"></i>Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-link--categories"
                to={ROUTE.CATALOG}
              >
                <i className="fas fa-th"></i>Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link--genres" to={ROUTE.CATALOG}>
                <i className="fas fa-th-large"></i>Genres
              </Link>
            </li>

            {(() => {
              if (isAuth) {
                return (
                  <>
                    <li className="nav-item dropdown">
                      <span
                        onClick={() => setShowDropdown(!showDropdown)}
                        className="nav-link nav-link--name dropdown-toggle"
                      >
                        <i className="fas fa-user"></i>
                        <span>{user.firstName}</span>
                      </span>
                      {showDropdown ? (
                        <ul ref={ref} className="dropdown-menu">
                          <li>
                            <Link
                              className="dropdown-item nav-link nav-link--profile"
                              onClick={() => setShowDropdown(false)}
                              to={ROUTE.PROFILE}
                            >
                              <i className="fas fa-id-card-alt"></i>Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item nav-link nav-link--basket"
                              onClick={() => setShowDropdown(false)}
                              to={ROUTE.PROFILE}
                            >
                              <i className="fas fa-shopping-cart"></i>Basket
                            </Link>
                          </li>
                          <li>
                            <span
                              className="dropdown-item nav-link nav-link--logout"
                              onClick={() => {
                                setShowDropdown(false);
                                logOut();
                              }}
                            >
                              <i className="fas fa-sign-out-alt"></i>Logout
                            </span>
                          </li>
                        </ul>
                      ) : null}
                    </li>
                  </>
                );
              }

              return (
                <>
                  <li className="nav-item">
                    <Link className="nav-link nav-link--login" to={ROUTE.LOGIN}>
                      <i className="fas fa-sign-in-alt"></i>Login
                    </Link>
                  </li>
                </>
              );
            })()}
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
}
