import React, { useState } from "react";
import PropTypes from "prop-types";
import { StateX } from "../../icons/StateX";
import "./style.css";

export const SearchBar = ({ value, onChange, placeholder, clearIcon, className }) => {
  const [searchValue, setSearchValue] = useState(value || "");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const clearSearch = () => {
    setSearchValue("");
    if (onChange) {
      onChange("");
    }
  };

  const handleKeyPress = (event) => {

    if (event.key === "Enter") {
      console.log("Search value:", searchValue);
      const sqlite3 = require('sqlite3').verbose();
      const db = new sqlite3.Database('./DB/recipe.db');

      // Here you can perform further actions with the search value
    }
  };

  return (
    <div className={`search-bar-container ${className}`}>
      <div className="search-bar-content">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="search-input"
          placeholder={placeholder || "Search"}
        />
        {clearIcon && <StateX className="state-x" onClick={clearSearch} />}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  clearIcon: PropTypes.bool,
  className: PropTypes.string,
};
