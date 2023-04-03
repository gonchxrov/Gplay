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
  setCart,
  selectIsAuth,
} from "../../store";
import jwt_decode from "jwt-decode";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const token = localStorage.getItem("token") || "";

      // Save user data after refresh
      if (token && !isAuth) {
        const { id, firstName, lastName, email, photo, role } =
          jwt_decode(token);
        dispatch(
          setUser({
            id,
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

      // Save cart data after refresh
      if (cart) {
        dispatch(
          setCart({
            cart,
          })
        );
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
