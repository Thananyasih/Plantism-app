import React from "react";
import "./home.css";
import homePlant01 from "../../assets/homePlant01.jpg";
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
        <div className="gallery">
          <img
            className="img-plant"
            src={homePlant01}
            alt="home01"
            style={{ height: "374.53px" }}
          ></img>
          <div className="desc">Tips from Planter</div>
        </div>
        <div className="gallery">
          <img className="img-plant" src={homePlant02} alt="home02"></img>
          <div className="desc">Plant Styles</div>
        </div>

        <div className="gallery">
          <img className="img-plant" src={homePlant03} alt="home03"></img>
          <div className="desc">Outdoor Plants</div>
        </div>

        <div className="gallery">
          <img className="img-plant" src={homePlant04} alt="home04"></img>
          <div className="desc">Indoor Plants</div>
        </div>

        <div className="gallery">
          <img className="img-plant" src={homePlant05} alt="home05"></img>
          <div className="desc">Customize Own Space</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
