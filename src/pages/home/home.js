import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1>Create Better Place</h1>
        <h1>Space for Plantism.</h1>
      </div>
      <div className="img-container">
        <img src="src/img/homePlant01.jpg" alt="home01"></img>
        <img src="src/img/homePlant02.jpg" alt="home02"></img>
        <img src="src/img/homePlant03.jpg" alt="home03"></img>
        <img src="src/img/homePlant04.jpg" alt="home04"></img>
        <img src="src/img/homePlant05.jpg" alt="home05"></img>
      </div>
    </div>
  );
};

export default Home;
