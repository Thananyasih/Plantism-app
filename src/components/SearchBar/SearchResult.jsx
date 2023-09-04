import React from "react";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="serach-result"
      onClick={(e) => alert(`You Selected ${result}!`)}
    >
    </div>
  );
};
