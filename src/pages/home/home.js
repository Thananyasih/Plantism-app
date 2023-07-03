import React from "react";
import "./home.css";
import homePlant01 from ".../assets/homePlant01.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1>Create Better Place</h1>
        <h3>The Space for Plantism.</h3>
      </div>
      <div className="img-container">
        <img src={homePlant01} alt="home01"></img>
        <img src="./img/homePlant02.jpg" alt="home02"></img>
        <img src="./img/homePlant03.jpg" alt="home03"></img>
        <img src="./img/homePlant04.jpg" alt="home04"></img>
        <img src="./img/homePlant05.jpg" alt="home05"></img>
      </div>
    </div>
  );
};

export default Home;
