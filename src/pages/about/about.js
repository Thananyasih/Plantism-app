import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="img-about-container">
        <div className="about-bg" />
        <img
          src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/09/29195121/cover-copy.jpg"
          alt="about plant"
          className="img-aboutPlant"
        />
        <img
          src="https://mosquitonixhouston.com/wp-content/uploads/2019/06/Indoor-Plants_BG-1-1180x704-1-1180x590.jpg"
          alt="about plant 2"
          className="img-aboutPlant"
        />
        <img
          src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%20stock%20archive%2Ff6c6f78a244089e40f6318da913a29ff00d39557"
          alt="about plant 3"
          className="img-aboutPlant"
        />
      </div>
      <div className="about-container">
        <h1>About Plantism</h1>
        <h2>Why Plantism ?</h2>
        <h3>
          This web page is collection for planter who aims to find plants breed
          and tips from community, also need ideas to create and planning own
          nature space.
        </h3>
        <p />
        <h2>How to use Plantism ?</h2>
      </div>
    </div>
  );
};

export default About;
