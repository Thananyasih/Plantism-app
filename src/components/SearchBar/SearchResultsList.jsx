import React from "react";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <div key={id}>{result.data.common_name}</div>;
      })}
    </div>
  );
};
