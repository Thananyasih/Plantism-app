import React from "react";
import "./design.css";

const Design = () => {
  return (
    <div>
      <div className="design-bg"></div>
      {/* <img src="https://wallpapercave.com/wp/wp6680363.jpg" alt="graphic-plant" className="graphic-plant"/> */}

      <div className="design-container">
        <h1>Plantism Design Space </h1>
            {/* <img src="https://cdn.mos.cms.futurecdn.net/6Kowst46WKuB7BzkPs7Pcn-1920-80.jpg.webp" alt="landscape zone"></img> */}
      </div>
      <div className="design-content">
        <div className="indoor-plant">
          <div>
            <div className="indoor-site">
            <h2>Space Design Ideas sites</h2>
              <div className="site-1">
                <a href="https://www.gardeningetc.com/design/small-garden-layout-ideas" >#1 Gardeningetc</a>   
                <img src="https://cdn.mos.cms.futurecdn.net/6Kowst46WKuB7BzkPs7Pcn-1920-80.jpg.webp" alt="low-light plants"></img>
                <h4><b>Small garden layout ideas:</b> 11 clever ways to arrange your outdoor space</h4>
              </div><br/>
              

              <div className="site-1">
                <a href="https://www.houzz.com/photos/outdoor-design-ideas-phbr0-bp~t_724" >#2 Outdoor Design Living</a>   
                <img src='https://www.outdoordesign.com/cdn/shop/files/20171012_OutdoorDesigns_2419Bronson_1603dog_da9d5f9b-fcbd-4542-89ad-601e12b1de34_2048x.jpg?v=1642358143' alt="low-light plants"></img>
                <h4><b>Start planning your outdoor space:</b> Outdoor design proundly covers every aspect of outdoor living.</h4>
              </div>
            </div>
          </div>                   
        </div>
        </div>
        
          <div className="outdoor-plant">          
            <h2>Outdoor Space Design Ideas</h2>
        </div>
      </div>
    
    
  );
};

export default Design;
