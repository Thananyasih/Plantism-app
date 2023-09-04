import React, { useState } from "react";
import "./plantalog.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchResultsList } from "../../components/SearchBar/SearchResultsList";

const Plantalog = () => {
  const [results, setResults] = useState([]);

  return (
    <div >
      <div className="plantalog-container">
      <h2>Search Plants...</h2>
      </div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
      <h3>Filter Plants</h3>

    </div>
  );
};

export default Plantalog;
