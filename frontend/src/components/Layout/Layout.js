import React from "react";
import { Loader } from "../Loader/Loader";

export function Layout(props) {
  return props.isLoaded ? (
    <main className="col-10 mx-auto">{props.children}</main>
  ) : (
    <Loader />
  );
}
