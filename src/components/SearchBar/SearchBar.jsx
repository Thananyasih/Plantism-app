// key: sk-7psF64f8528c3e1441856
// "https://perenual.com/api/species-list?page=1&key=sk-7psF64f8528c3e1441856"

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useEffect, useState } from "react";
import axios from "axios";


const SearchBar = () => {

  const [search, setSearch] = useState('')
  const [plantList, setPlantList] = useState([]);

  useEffect(() => {
    axios.get('https://perenual.com/api/species-list?&key=sk-7psF64f8528c3e1441856')
    .then((res) => {
      setPlantList(res.data.data)
    })
  },[])
    

  const handleSearchFilter = (e) => {
    setSearch(e.target.value)
  }

  return (  
    <div className="search-top">
        <div className="search" >
            {<FaSearch id="search-icon" />}
          <div >
            <input
              type="text"
              placeholder="Search Plants Here..."
              onChange={handleSearchFilter}
              />
              {plantList.map((item) => {
                if(search === ''){
                  return <div key={item.id} className="search-result" style={{display:'none'}}/>                   
                } else if (item.common_name.toLowerCase().includes(search.toLowerCase())){
                  return <div key={item.id} className="search-result" >
                  <li>{item.common_name}</li>                  
                  </div>
                }
              })}
          </div>
        </div>
    </div>
  )
};

export default SearchBar;
                

        
