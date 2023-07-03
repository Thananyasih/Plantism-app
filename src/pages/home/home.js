import React from "react";
import "./home.css";
// import homePlant01 from "../../assets/homePlant01.jpg";
import homePlant02 from "../../assets/homePlant02.jpg";
import homePlant03 from "../../assets/homePlant03.jpg";
import homePlant04 from "../../assets/homePlant04.jpg";
import homePlant05 from "../../assets/homePlant05.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1>Create Nature Space</h1>
        {/* <h3>- The place for Plantism -</h3> */}
      </div>
      <div className="img-container">
        {/* <img className="img-plant" src={homePlant01} alt="home01"></img> */}
        <img className="img-plant" src={homePlant02} alt="home02"></img>
        <img className="img-plant" src={homePlant03} alt="home03"></img>
        <img className="img-plant" src={homePlant04} alt="home04"></img>
        <img className="img-plant" src={homePlant05} alt="home05"></img>
      </div>
    </div>
  );
};

export default Home;
