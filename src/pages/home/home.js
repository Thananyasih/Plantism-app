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
        <h1>Welcome To Plantism</h1>
        <h3>Select the place for fast ideas !</h3>
      </div>
      <div className="img-container">
        {/* <img className="img-plant" src={homePlant01} alt="home01"></img> */}
        <div className="gallery">
          <img className="img-plant" src={homePlant02} alt="home02"></img>
          <div className="desc">About home 01</div>
        </div>

        <div className="gallery">
          <img className="img-plant" src={homePlant03} alt="home03"></img>
          <div className="desc">About home 02</div>
        </div>

        <div className="gallery">
          <img className="img-plant" src={homePlant04} alt="home04"></img>
          <div className="desc">About home 03</div>
        </div>

        <div className="gallery">
          <img className="img-plant" src={homePlant05} alt="home05"></img>
          <div className="desc">About home 04</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
