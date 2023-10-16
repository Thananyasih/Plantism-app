
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";




const SearchBar = () => {

  const [textInput, setTextInput] = useState('')
  const [plantDataFromAPI, setPlantDataFromAPI] = useState([])
  const [openedCardName, setOpenCardName] = useState('')
  const [plantSearchResult, setPlantSearchResult] = useState([])
  

  useEffect(() => {
  fetch('https://perenual.com/api/species-list?&key=sk-7psF64f8528c3e1441856')
    .then((res) => {
      return res.json()})
    .then((data) => { 
      // รับ data (ข้อมูลทั้งหมด) เข้ามาอยู่ใน setPlantDataFromAPI     
        setPlantDataFromAPI(data.data)

      // โดยถ้าไม่มีการเชื่อมต่อ API จะมี ERR ขึ้น && value ของ plantDataFromAPI = [] 
      }).catch((err) => console.error('ERR'))   
    },[])
   
useEffect(() => {   
  // ถ้า value ของ textInput === '' ให้มี value = setPlantDataFromAPI แต่ถ้า textInput !== '' filtered = value ที่ filter แล้วตาม textInput
  const filtered = !textInput ? plantDataFromAPI : (
    plantDataFromAPI ?
    plantDataFromAPI.filter((item) => (
    item.common_name.toLowerCase().startsWith(textInput.toLowerCase())
  )) : []
  )
      // update value of plantSearchResult
      setPlantSearchResult(filtered)
    }, [textInput, plantDataFromAPI])

const onChangeTextInputHandler = (e) => {
  setTextInput(e.target.value)
}

const handleClicked = (name) => {
  setOpenCardName(name)
  
}
  
  return (  
    <div className="search-top">
      <div className="plantalog-bg" />
      <h2 className="head-plantalog">Plantalog Search 🪴</h2>
        <div className="search" >
            {<FaSearch id="search-icon" />}
          <div>
           
            <input
              type="text"
              value={textInput}
              placeholder="Search Plants Here..."
              onChange={onChangeTextInputHandler} 
                         
              />
            <div className="search-result-container"> 

              {plantSearchResult && plantSearchResult.map((item) => {
                return textInput === '' ? 
                <div key={item.id} style={{display:'none'}} /> 
                 : (  <div key={item.id}>
                        <div className="search-result" key={item.id} onClick={() => handleClicked(item.common_name)} >{item.common_name}</div> 
                      </div>
                      )
                }               
              )}
              
            </div>           
          </div> 
        </div>
        <div className="plant-cards-container">
        <div className="card-border"></div>
            
        {textInput && openedCardName && plantSearchResult && plantSearchResult.map((item) => {
          return ( openedCardName === item.common_name && <ul key={item.id} className="plant-cards" style={{display: 'block'}}>
                          
                          <h2>{item.common_name}</h2>
                          <img className="plant-card-image" key={item.id} src={item.default_image?.medium_url} alt={item.common_name}/> 
                          {/* <h2><b>Details</b></h2>   */}
                          <h3><b>Scientific Name:</b> {item.scientific_name}</h3>
                          <h3><b>Cycle:</b> {item.cycle}</h3>
                          <h3><b>Watering:</b> {item.watering}</h3>                    
          </ul>
          )
        })}
      </div>
    </div>
  )
};

export default SearchBar;
                

        
