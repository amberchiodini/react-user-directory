import React from "react";
import "../styles/SearchBar.css"

const SearchBar = (props) => {

  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default SearchBar;