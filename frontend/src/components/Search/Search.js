import React from "react";
import "./Search.scss";

export function Search() {
  return (
    <div className="search col-12 col-xl-3 mb-3 mb-xl-0 order-2 order-xl-1">
      <div className="search__form mb-0 d-xl-flex align-content-xl-center">
        <div className="input-wrapper--text w-100">
          <input
            type="text"
            name="search"
            className="search__input"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
