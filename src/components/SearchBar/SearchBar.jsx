// key: sk-PmRY64d7a7e30c48c1856

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";

import "./SearchBar.css";
// import { json } from "react-router-dom";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  
  const fetchData = (value) => {
    // fetch(
    //   "https://perenual.com/api/species-list?page=1&key=sk-PmRY64d7a7e30c48c1856"
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    Axios.get(
      "https://perenual.com/api/species-list?page=1&key=sk-PmRY64d7a7e30c48c1856"
    ).then((res) => {
      console.log(res.data.data);
    });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
