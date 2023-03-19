import React from "react";
import { Loader } from "../Loader/Loader";

export function Layout(props) {
  return props.isLoaded ? (
    <main className="showcase col-10 mx-auto">{props.children}</main>
  ) : (
    <Loader />
  );
}
