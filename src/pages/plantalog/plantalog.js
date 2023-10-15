import SearchBar from "../../components/SearchBar/SearchBar";
import "./plantalog.css";

const Plantalog = () => {

  return (
    <div>
      <div className="plantalog-bg-container">
        <img src='https://wallpapercave.com/wp/wp6680363.jpg' alt='plantalog Bg' ></img>
      </div>
      <div className="wrapper">
        <SearchBar/>
      </div>      
    </div>
  )
};

export default Plantalog;
