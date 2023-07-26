import React, { useRef, useState } from "react";
import "./SearchBar.css";
import List from "../Data/List";

const SearchBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = (e) => {
    setIsOpen(!isOpen);
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

    if (inputText) {
      setIsOpen(!isOpen) && <List style={{ display: "none" }} />;
    }
  };

  return (
    <div>
      <div id="dropdown" className="dropdown-content">
        <input
          type="text"
          placeholder="Search..."
          id="typeInput"
          onChange={inputHandler}
          onClick={openHandler}
        />
        {isOpen ? <List input={inputText} /> : ""}
      </div>
    </div>
  );
};

export default SearchBar;
