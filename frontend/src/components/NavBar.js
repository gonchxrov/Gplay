import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setIsAuth,
  selectIsAdmin,
  unSetUser,
  selectIsAuth,
} from "../store/User";
import { ROUTE } from "../router";
import { Button } from "./Button";

export function NavBar() {
  const isAuth = useSelector(selectIsAuth);
  const isAdmin = useSelector(selectIsAdmin);

  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.clear();
    dispatch(unSetUser());
    dispatch(setIsAuth(false));
  };

  return (
    <nav>
      <Link to={ROUTE.HOME}>Home</Link>
      <Link to={ROUTE.CATALOG}>Catalog</Link>

      {(() => {
        if (isAuth) {
          if (isAdmin) {
            return (
              <>
                <Link to={ROUTE.ADMIN}>Admin</Link>
                <Button onClick={logOut}>Logout</Button>
              </>
            );
          }

          return (
            <>
              <Link to={ROUTE.PROFILE}>Profile</Link>
              <Button onClick={logOut}>Logout</Button>
            </>
          );
        }

        return (
          <>
            <Link to={ROUTE.LOGIN}>Login</Link>
            <Link to={ROUTE.SIGN_IN}>SignIn</Link>
          </>
        );
      })()}
    </nav>
  );
}
