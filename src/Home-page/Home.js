import React from "react";
import AboutInfo from "../About-info/AboutInfo";
import Plantalog from "../Plantalog-catagories/Plantalog";

const Home = () => {
  return (
    <div>
      <div>
        <div>Home Page</div>
        <AboutInfo />
        <Plantalog />
        <link href="/About-info" />
      </div>
    </div>
  );
};

export default Home;
