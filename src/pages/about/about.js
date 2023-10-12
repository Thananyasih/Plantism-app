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
        This web page is a collection for planters 
        who aim to find plant breeds, how to take care of them, 
        and tips from the Plantism community. 
        Everyone can also look out ideas for their own space on the "Design and Space" page for inspiration with their own styles.
        </h3>
        <p />
        <h2>How to use Plantism ?</h2>
        
        <div className="how-to-about-wrap">
          <div className="how-to-about">
            <img src="https://cdn.shortpixel.ai/spai/q_lossy+w_1668+h_938+to_auto+ret_img/cosmosmagazine.com/wp-content/uploads/2022/01/1200-GettyImages-1215942020.jpg" alt="find plants"></img>
            <li>Searching for the right plant for your space.</li>
          </div>
            <div className="how-to-about">          
          <img src="https://s.wsj.net/public/resources/images/BN-QB511_fixbur_M_20160930150944.jpg" alt="find plants"></img>
            <li>Tips article from professional planter.</li>
          </div>

          <div className="how-to-about">        
          <img src="https://www.epicgardening.com/wp-content/uploads/2023/09/Common-Houseplants-on-table.jpg" alt="find plants"></img>
            <li>Find idea and design for your space.</li>
          </div>
        
      </div>
      </div>
    </div>
  );
};

export default About;
