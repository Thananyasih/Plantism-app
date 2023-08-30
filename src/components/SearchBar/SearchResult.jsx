import React from "react";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="serach-result"
      onClick={(e) => alert(`You Selected ${result}!`)}
    >
      <h1>Name: <span id="common_name"></span></h1>

    </div>
  );
};
