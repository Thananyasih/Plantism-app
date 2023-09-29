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
import famous6 from "../../assets/stromanthe.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-bg" />
      <div className="home-container">
        <h1>Welcome To Plantism</h1>
        <h3>Select the card for fast ideas !</h3>
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
        <p>House Plants of the year ✨</p>
        <h3>{'['} Full information {']'}</h3>
        <a href="/plantalog">Find more plants &rarr;</a>
      </div>

      <div className="img-famous-container">
        <a href="https://en.wikipedia.org/wiki/Monstera_deliciosa" className="hot-plant">
          <img
            className="imgFamous-plant"
            src={famous1}
            alt="Monstera Deliciosa"
          />
          <div className="famous-desc">Monstera Deliciosa</div>
        </a>

        <a href="https://en.wikipedia.org/wiki/Dracaena_trifasciata" className="hot-plant">
          <img className="imgFamous-plant" src={famous2} alt="Snake Plant" />
          <div className="famous-desc">Snake Plant</div>
        </a>

        <a href="https://en.wikipedia.org/wiki/Ficus_lyrata" className="hot-plant">
          <img
            className="imgFamous-plant"
            src={famous3}
            alt="Fiddle Leaf Fig"
          />
          <div className="famous-desc">Fiddle Leaf Fig</div>
        </a>

        <a href="https://hemleva.com/blogs/news/tillandsia-capitata-peach-air-plant" className="hot-plant">
          <img
            className="imgFamous-plant"
            src={famous4}
            alt="Peach Air Plant"
          />
          <div className="famous-desc">Peach Air Plant</div>
        </a>

        <a href="https://en.wikipedia.org/wiki/Philodendron_hederaceum" className="hot-plant">
          <img
            className="imgFamous-plant"
            src={famous5}
            alt="Philodendron Brasil"
          />
          <div className="famous-desc">Philodendron Brasil</div>
        </a>

        <a href="https://en.wikipedia.org/wiki/Stromanthe_sanguinea" className="hot-plant">
          <img className="imgFamous-plant" src={famous6} alt="Stromanthe" />
          <div className="famous-desc">Stromanthe</div>
        </a>
      </div>
    </div>
  );
};

export default Home;
