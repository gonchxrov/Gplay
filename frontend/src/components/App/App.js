import AppRouter from "../../router";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import {
  setUser,
  setPhoto,
  setIsAuth,
  unSetUser,
  unSetPhoto,
  selectIsAuth,
} from "../../store";
import jwt_decode from "jwt-decode";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    try {
      const token = localStorage.getItem("token") || "";
      if (token && !isAuth) {
        const { firstName, lastName, email, photo, role } = jwt_decode(token);
        dispatch(
          setUser({
            firstName,
            lastName,
            email,
            role,
          })
        );
        dispatch(
          setPhoto({
            photo,
          })
        );
        dispatch(setIsAuth(true));
      }
    } catch (error) {
      localStorage.clear();
      dispatch(unSetUser());
      dispatch(unSetPhoto());
      dispatch(setIsAuth(false));
      document.location.href = "/";
    }
  }, [dispatch, isAuth]);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
