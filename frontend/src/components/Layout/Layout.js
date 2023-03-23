import React from "react";
import { Loader } from "../Loader/Loader";

export function Layout(props) {
  return props.isLoaded ? (
    <main className="main">{props.children}</main>
  ) : (
    <Loader />
  );
}
