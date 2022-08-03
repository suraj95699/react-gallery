import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

/*
 *Loading the component of the header
 */
function HeaderSearch(props) {
  return (
    <div className="searchBar">
      <SearchBar search={props.search} />
      <NavBar search={props.search} />
    </div>
  );
}
export default HeaderSearch;
