import React from "react";
import $ from "jquery";

function SearchBar(props) {
  return (
    <div className="search-form">
      <input
        type="text"
        name="search"
        id="searchTxt"
        placeholder="Search..."
        onKeyPress={(e) =>
          e.key === "Enter" ? props.search($("#searchTxt").val()) : false
        }
      />
      <button
        type="submit"
        className="search-button null"
        onClick={() => props.search($("#searchTxt").val())}
        disabled=""
      >
        <svg height="32" width="32">
          <path
            d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
            fill="#ffffff"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SearchBar