import React from "react";
import { NavBar } from "../NavBar/NavBar";
import "./Header.scss";

export function Header() {
  return (
    <header className="header mb-5 bg-dark">
      <div>
        <NavBar />
      </div>
    </header>
  );
}
