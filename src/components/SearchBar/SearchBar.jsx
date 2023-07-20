import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import List from "../Data/List";

const SearchBar = (props) => {
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
  });

  const [isOpen, setIsOpen] = useState(false);
  const openHandler = (e) => {
    setIsOpen((isOpen) => !isOpen);
  };

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
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
        {!isOpen ? "" : <List input={inputText} />}
      </div>
    </div>
  );
};

export default SearchBar;
