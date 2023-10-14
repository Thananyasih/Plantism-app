import React from "react";
import "./design.css";

const Design = () => {
  return (
    <div>
      <div className="design-bg" />
      {/* <img src="https://wallpapercave.com/wp/wp6680363.jpg" alt="graphic-plant" className="graphic-plant"/> */}

      <div className="design-container">
        <h1>Plantism Design Space </h1>
            <img src="https://cdn.mos.cms.futurecdn.net/6Kowst46WKuB7BzkPs7Pcn-1920-80.jpg.webp" alt="landscape zone"></img>
      </div>
      <div className="design-content">
        <div className="indoor-plant">
          <div>
            <h2>Favourite Indoor Plants</h2>
            <img src="https://houseplantcentral.com/wp-content/uploads/2022/08/20-indoor-trees.jpg" alt="low-light plants"></img>
          </div>                   
        </div>
        </div>
        
          <div className="outdoor-plant">          
            <h2>Outdoor Landscape Layout</h2>
        </div>
      </div>
    
    
  );
};

export default Design;
