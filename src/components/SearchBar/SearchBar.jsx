// key: sk-7psF64f8528c3e1441856
// "https://perenual.com/api/species-list?page=1&key=sk-7psF64f8528c3e1441856"

import { useEffect, useRef, useState } from "react";

import { FaSearch } from "react-icons/fa";
// import axios from "axios";
import "./SearchBar.css";
// import PlantsCard from "./PlantsCard";



const SearchBar = () => {

  const [search, setSearch] = useState('')
  const [plantSearch, setPlantSearch] = useState([]);
  const [plantPic, setPlantPic] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  // const [isClick, setIsClick] = useState(false);
  // const [testData, setTestData] = useState([]);
  // const [plantCard, setPlantCard] = useState([])


  // useEffect(() => {
  //   axios.get('https://perenual.com/api/species-list?&key=sk-7psF64f8528c3e1441856')
  //   .then((res) => {
  //     // setPlantPic(res.data.data.default_image.original_url)
  //     setPlantSearch(res.data.data)
  //   }).catch((err) => console.error(err))
  // },[search])
  // console.log(plantSearch);
  

  useEffect(() => {
  fetch('https://perenual.com/api/species-list?&key=sk-7psF64f8528c3e1441856')
    .then((res) => {
      return res.json()})
    .then((data, ) => {      
        setPlantSearch(data.data)
        setPlantPic(data.data[0].default_image.original_url);
        console.log(data.data[1].default_image.original_url);

        // console.log(selected);
      }).catch((err) => console.error('ERR'))   
    },[])

// TEST with Fake API  
// useEffect(() => {
//   fetch('http://localhost:4000/data')
//     .then((res) => {
//       return res.json()})
//     .then(data => {
//         setTestData(data)
//         // console.log(data);
//         // console.log(selected);
//       })   
//     },[])

// const filtered = !search ? testData : testData.filter((item) => (
//   item.common_name.toLowerCase().startsWith(search.toLowerCase())
// ))



const filtered = !search ? plantSearch : plantSearch.filter((item) => (
  item.common_name.toLowerCase().startsWith(search.toLowerCase())
))

// const ref = useRef(null);

const handleClicked = (e) => {
  console.log(e.currentTarget.id);
  // console.log(ref.current.id);
  setIsOpened(isOpened => !isOpened)
  
}
  
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
            <div className="search-result-container"> 

              {filtered.map((item) => {
                return search === '' ? 
                <div key={item.id} style={{display:'none'}} /> 
                 : (  <div key={item.id}>
                        <div className="search-result" key={item.id} onClick={handleClicked} >{item.common_name}</div> 
                      </div>
                      )
                }               
              )}
              
            </div>

            
          </div> 
        </div>
        <div className="plant-cards-container">
            
        {search && isOpened && filtered.map((item) => (
          <ul key={item.id} className="plant-cards" style={{display: 'block'}}>
                          
                          <img key={item.id} src={plantPic} alt={item.common_name} style={{width:'300px', height: 'auto'}}/>
                            <h2>{item.common_name}</h2>
                            <h3><b>Scientific Name:</b> {item.scientific_name}</h3>
                            <h3><b>Cycle:</b> {item.cycle}</h3>
                            <h3><b>Watering:</b> {item.watering}</h3>
                            
          </ul>

        ))}
      </div>
    </div>
  )
};

export default SearchBar;
                

        
