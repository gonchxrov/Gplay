import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./Routes";

const AppRouter = () => {
  const isAuth = localStorage.getItem("token");

  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} exact />
      ))}
      {isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} exact />
        ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export { ROUTE } from "./Routes";
export default AppRouter;
