// key: sk-PmRY64d7a7e30c48c1856
// "https://perenual.com/api/species-list?page=1&key=sk-PmRY64d7a7e30c48c1856"

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {

  return (  
      <div className="search" >
        <input
          type="text"
          placeholder="Search Here..."
          />
          {<FaSearch id="search-icon" />}
      </div>

  )
};

export default SearchBar;
