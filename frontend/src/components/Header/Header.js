import React from "react";
import { NavBar } from "../NavBar/NavBar";
import "./Header.scss";

export function Header() {
  return (
    <header className="header mb-5 bg-dark">
      <div className="container-fluid container-xl">
        <NavBar />
      </div>
    </header>
  );
}
