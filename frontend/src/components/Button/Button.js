import React from "react";

export function Button(props) {
  return (
    <button type="button" className="btn btn--green" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
