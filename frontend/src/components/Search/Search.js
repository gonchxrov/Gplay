import React from "react";
import "./Search.scss";

export function Search() {
  return (
    <div className="search col-3 mb-0">
      <div className="search__form mb-0 d-flex align-content-center">
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
