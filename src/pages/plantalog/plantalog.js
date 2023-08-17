import React, { useState } from "react";
import "./plantalog.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const Plantalog = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <div>filter</div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <div>SearchResult</div>
      </div>
    </div>
  );
};

export default Plantalog;
