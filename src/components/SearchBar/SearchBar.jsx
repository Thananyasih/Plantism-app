// key: sk-7psF64f8528c3e1441856
// "https://perenual.com/api/species-list?page=1&key=sk-7psF64f8528c3e1441856"

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useEffect, useState } from "react";


const SearchBar = () => {

  const [query, setQuery] = useState('') 
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {})
    
  return (  
    <div className="search-top">
        <div className="search" >
            {<FaSearch id="search-icon" />}
          <div >
            <input
              type="text"
              placeholder="Search Plants Here..."
              onChange={e => setQuery(e.target.value)}
              />
          </div>
        </div>

        <div className="search-result">
     

            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
            <div>A</div>
        </div>
    </div>
  )
};

export default SearchBar;
