import React, { useState } from "react";
import "./plantalog.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { SearchResultsList } from "../../components/SearchBar/SearchResultsList";

const Plantalog = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <div>filter</div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <SearchResultsList results={results} />
        )}
      </div>
    </div>
  );
};

export default Plantalog;
