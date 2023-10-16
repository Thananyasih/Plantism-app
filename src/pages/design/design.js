import React from "react";
import "./design.css";
import { SlideData } from "../../components/SliderImage/SlideData";
import ImageSlider from "../../components/SliderImage/ImageSlider";


const Design = () => {

  return (
    <div>
      <div className="design-bg"/>
      <div className="design-container">
        <h2> Outdoor Design | Space Ideas </h2>
      </div>
      <div className="design-content">
        <div className="suggest-site">
          <div>
            <div className="suggest-site-list">
            <h2> Design Ideas Site</h2>
              <div className="site-1">
                <a href="https://www.gardeningetc.com/design/small-garden-layout-ideas" >#1 Gardening etc.</a>   
                <img src="https://cdn.mos.cms.futurecdn.net/6Kowst46WKuB7BzkPs7Pcn-1920-80.jpg.webp" alt="low-light plants"></img>
                <h4><b>Small garden layout ideas:</b> 11 clever ways to arrange your outdoor space</h4>
              </div><br/>
              
              <div className="site-1">
                <a href="https://www.houzz.com/photos/outdoor-design-ideas-phbr0-bp~t_724" >#2 Outdoor Design Living</a>   
                <img src='https://www.outdoordesign.com/cdn/shop/files/20171012_OutdoorDesigns_2419Bronson_1603dog_da9d5f9b-fcbd-4542-89ad-601e12b1de34_2048x.jpg?v=1642358143' alt="low-light plants"></img>
                <h4><b>Start planning your outdoor space:</b> Outdoor design proundly covers every aspect of outdoor living.</h4>
              </div><br/>

              <div className="site-1">
                <a href="hhttps://www.thespruce.com/backyard-decor-ideas-7482940" >#3 The spruce</a>   
                <img src='https://www.thespruce.com/thmb/TrvYWo0HSa5eO8--DTWq7bcr648=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LgrNbDxl-a5cbe0062a424666824b63ef3f70630c.jpeg' alt="low-light plants"></img>
                <h4><b>Tend your garden like a pro:</b> Learn how to do everyday tasks, pick out the best plants.</h4>
              </div><br/>
            </div>
          </div>                   
        </div>
        </div>

         <div className="img-slide">          
            <ImageSlider slides={SlideData}/>
          </div>

          <div className="indoor-container">
            <h2>Indoor Design & Planter</h2>
            <div>Everyone have own favourite indoor spot, Find out style that match with you !</div>
          <div className="">
          </div>
          </div>

          <div className="planter-container">
            <h3>Planter Site</h3>
            <ul>
              <li>
                <a href='https://plantersetcetera.com/blog/types-of-planters/' alt='planter1'>9 Types Of Planters The Most Popular Pots For Decorations | By: Plant Etc</a>
              </li>
              <li>
              <a href='https://www.millcreekgardens.com/5-types-of-outdoor-plant-containers-which-is-right-for-you/' alt='planter1'>5 Types of Outdoor Plant Containers | By: Millcreek Garden</a>
              </li>
              <li>
              <a href='https://jayscotts.com/blog/planter-materials/' alt='planter1'>

7 Best Planter Materials | By: Jay Scotts Collection</a>
              </li>
              <li>
              <a href='https://vietnamcdm.com/blog/types-of-pots-for-plants/' alt='planter1'>7 Most Popular Types Of Pots For Plants | By: Creative Design Manufacturing</a>
              </li>
              <li>
              <a href='https://www.wayfair.com/sca/ideas-and-advice/guides/types-of-planters-how-to-choose-an-indoor-planter-T12841' alt='planter1'>Types of Planters: How to Choose an Indoor Planter | By: Wayfair</a>
              </li>
            </ul>
          </div>
          

        </div>

           
  );
};

export default Design;
