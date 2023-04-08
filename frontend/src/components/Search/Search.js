import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss";

export function Search() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    navigate(`/search/${searchText}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search/${searchText}`);
    }
  };

  const handleChange = ({ target }) => {
    setSearchText(target.value);
  };

  return (
    <div className="search col-3 mb-0">
      <div className="search__form mb-0 d-flex align-content-center">
        <div className="input-wrapper--text w-100">
          <input
            type="text"
            name="search"
            className="search__input"
            placeholder="Search..."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <i className="fas fa-search" onClick={handleClick}></i>
        </div>
      </div>
    </div>
  );
}
