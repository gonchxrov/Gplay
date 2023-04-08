import React, { useEffect, useRef } from "react";

import "./Modal.scss";

export function Modal({ closeModal, children }) {
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div className="overlay">
      <div className="content" ref={ref}>
        <div className="icon--delete" onClick={closeModal}></div>
        {children}
      </div>
    </div>
  );
}
