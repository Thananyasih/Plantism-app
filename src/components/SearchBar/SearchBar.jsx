// key: sk-7psF64f8528c3e1441856
// "https://perenual.com/api/species-list?page=1&key=sk-7psF64f8528c3e1441856"

import { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
// import axios from "axios";
import "./SearchBar.css";
// import PlantsCard from "./PlantsCard";



const SearchBar = () => {

  const [search, setSearch] = useState('')
  // const [plantSearch, setPlantSearch] = useState([]);
  // const [isClicked, setIsClicked] = useState(false);
  const [testData, setTestData] = useState([]);

  // useEffect(() => {
  //   axios.get('https://perenual.com/api/species-list?&key=sk-7psF64f8528c3e1441856')
  //   .then((res) => {
  //     setPlantSearch(res.data.data)
  // console.log(plantSearch);
  //   })
  // },[search])

  // useEffect(() => {
  // fetch('https://perenual.com/api/species-list?&key=sk-7psF64f8528c3e1441856')
  //   .then((res) => {
  //     return res.json()})
  //   .then(data => {
  //       setPlantSearch(data)
  //       console.log(data);
  //       // console.log(selected);
  //     }).catch((err) => console.error('ERR'))   
  //   },[])

// TEST with Fake API  
useEffect(() => {
  fetch('http://localhost:4000/data')
    .then((res) => {
      return res.json()})
    .then(data => {
        setTestData(data)
        console.log(data);
        // console.log(selected);
      })   
    },[])

const filtered = !search ? testData : testData.filter((item) => (
  item.common_name.toLowerCase().startsWith(search.toLowerCase())
))

// const filtered = !search ? plantSearch : plantSearch.filter((item) => (
//   item.common_name.toLowerCase().startsWith(search.toLowerCase())
// ))


  
  return (  
    <div className="search-top">
        <div className="search" >
            {<FaSearch id="search-icon" />}
          <div>
           
            <input
              type="text"
              value={search}
              placeholder="Search Plants Here..."
              onChange={(e) => setSearch(e.target.value)}            
              />
            <div >
              
              {/* {plantSearch.map((item) => {
                return search === '' ? 
                <div key={item.id} className='search-result' style={{display:'none'}} /> 
                 : item.common_name.toLowerCase().startsWith(search.toLowerCase()) ? (                    
                      <div key={item.id}>
                        <div className='search-result' onClick={(e)=>{setSelected(e.target.value)}}>{item.common_name}</div>                                        
                      </div>                   
                      ) : ''
                }               
              )} */}

              {filtered.map((item) => {
                return search === '' ? 
                <div key={item.id} className="search-result-container" style={{display:'none'}} /> 
                 : (  <div key={item.id}>
                        {/* <div className="search-result" onClick={handleClicked}>{item.common_name}</div>                                         */}
                        <ul className="plant-cards">
                          <img src={item.default_image.regular_url
} alt={item.common_name} style={{width:'400px', height: 'auto'}}/>
                          <p>
                            <h2>{item.common_name}</h2>
                            <h3>Scientific Name: {item.scientific_name}</h3>
                            <h3>Cycle: {item.cycle}</h3>
                            <h3>Watering: {item.watering}</h3>
                          </p>
                        </ul>                   
                      </div>
                      )
                }               
              )}
            </div>
          </div> 
        </div>        
    </div>
  )
};

export default SearchBar;
                

        
