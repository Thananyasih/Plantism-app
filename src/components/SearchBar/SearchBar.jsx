// key: sk-7psF64f8528c3e1441856
// "https://perenual.com/api/species-list?page=1&key=sk-7psF64f8528c3e1441856"

import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useEffect, useState } from "react";
import axios from "axios";


const SearchBar = () => {

  const [search, setSearch] = useState('')
  const [plantList, setPlantList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [headChange, setHeadChange] = useState('')

  useEffect(() => {
    axios.get('https://perenual.com/api/species-list?&key=sk-7psF64f8528c3e1441856')
    .then((res) => {
      setPlantList(res.data.data)
    })
  },[search])   

  const handleClicked = (e) => {
    e.preventDefault();
    setIsClicked(isClicked => !isClicked);
    if(!isClicked) (
      <div className="search-result-head" style={{color: 'red'}}>This is {search.e.target.value} details!</div>
    );
  }

  return (  
    <div className="search-top">
        <div className="search" >
            {<FaSearch id="search-icon" />}
          <div>
            <input
              type="text"
              placeholder="Search Plants Here..."
              onChange={(e) => setSearch(e.target.value)}            
              />
            <div className="search-result-container">
              {plantList.map((item) => {
                return search === '' ? 
                <div key={item.id} className='search-result' style={{display:'none'}}/> 
                 : item.common_name.toLowerCase().startsWith(search.toLowerCase()) ? (                    
                      <div key={item.id}>
                        <div onClick={handleClicked} className='search-result'>{item.common_name}</div>                                        
                      </div>                   
                      ) : ''
                }               
              )}
            </div>
            <div className="search-result-head" onChange={(e) => setHeadChange(e.target.value)}>This is {search} details!</div>
          </div>             
          
        </div>
        <div>
            <h2>Indoor Plant Recommended</h2>
          </div>
          <div>
            <h2>Outdoor Plant Recommended</h2>
          </div>
          <div>
            <h2>In-door Plant Recommended</h2>
          </div>
    </div>
  )
};

export default SearchBar;
                

        
