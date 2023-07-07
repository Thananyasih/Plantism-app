import React from "react";
import "./home.css";
import homePlant01 from "../../assets/homePlant01.jpg";
import homePlant02 from "../../assets/homePlant02.jpg";
import homePlant03 from "../../assets/homePlant03.jpg";
import homePlant04 from "../../assets/homePlant04.jpg";
import homePlant05 from "../../assets/homePlant05.jpg";

import famous1 from "../../assets/monsteraDeliciosa.jpg";
import famous2 from "../../assets/snakePlant.jpg";
import famous3 from "../../assets/fiddleLeafFig.jpg";
import famous4 from "../../assets/peachAirPlant.jpg";
import famous5 from "../../assets/philodendronBrasil.jpg";
import famous6 from "../../assets/stringOfPearls.jpg";
import famous7 from "../../assets/stromanthe.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1>Welcome To Plantism</h1>
        <h3>Select the place for fast ideas !</h3>
      </div>

      <div className="img-container">
        <a href="/blogs" className="gallery">
          <img
            className="img-plant"
            src={homePlant01}
            alt="home01"
            style={{ height: "374.53px" }}
          />

          <div href="/blogs" className="desc">
            Tips from Planter
          </div>
        </a>
        <a href="/plantalog" className="gallery">
          <img className="img-plant" src={homePlant02} alt="home02" />
          <div className="desc">Plant Styles</div>
        </a>

        <a href="/design" className="gallery">
          <img className="img-plant" src={homePlant03} alt="home03" />
          <div className="desc">Outdoor Plants</div>
        </a>

        <a href="/design" className="gallery">
          <img className="img-plant" src={homePlant04} alt="home04" />
          <div className="desc">Indoor Plants</div>
        </a>

        <a href="/design" className="gallery">
          <img className="img-plant" src={homePlant05} alt="home05" />
          <div className="desc">Customize Own Space</div>
        </a>
      </div>

      <div className="content-container">
        <p>Plants of the year 🔥</p>
        <a href="/plantalog">Find more plants &rarr;</a>
      </div>
      <div className="img-content-container">
        <a href="/" className="hot-plant">
          <img
            className="famous-plant"
            src={famous1}
            alt="Monstera Deliciosa"
          />
          <div className="desc">Monstera Deliciosa</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
