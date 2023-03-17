import React from "react";

export function Button(props) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
