import AppRouter from "./router";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "./components/NavBar";
import { setUser, setIsAuth, unSetUser, selectIsAuth } from "./store";
import jwt_decode from "jwt-decode";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token") || "";
      if (token && !isAuth) {
        const { firstName, lastName, email, role } = jwt_decode(token);
        dispatch(
          setUser({
            firstName,
            lastName,
            email,
            role,
          })
        );
        dispatch(setIsAuth(true));
      }
    } catch (error) {
      localStorage.clear();
      dispatch(unSetUser());
      dispatch(setIsAuth(false));
      document.location.href = "/";
    }
  }, [dispatch, isAuth]);

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
