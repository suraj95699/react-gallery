import React from "react";

/*
* return the navbar 
*/
function NavBar(props) {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <a href="#mountain" onClick={() => props.search("mountain")}>
              Mountain
            </a>
          </li>
          <li>
            <a href="#beach" onClick={() => props.search("beach")}>
              Beaches
            </a>
          </li>
          <li>
            <a
              aria-current="page"
              className="active"
              href="#bird"
              onClick={() => props.search("bird")}
            >
              Birds
            </a>
          </li>
          <li>
            <a href="#food" onClick={() => props.search("food")}>
              Food
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  export default NavBar