// key: sk-PmRY64d7a7e30c48c1856

import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import { json } from "react-router-dom";
import axios from "axios";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    axios
      .get(
        "https://perenual.com/api/species-list?page=1&key=sk-PmRY64d7a7e30c48c1856"
      )
      .then((res) => {
        console.log(res);
      })
      .then((json) => {
        const results = json.filter((data) => {
          return (
            value &&
            data &&
            data.common_name &&
            data.common_name.toLowerCase()
          ).includes(value);
        });
        setResults(results);
      })
      .catch((err) => {
        console.log("Plants not found !");
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
