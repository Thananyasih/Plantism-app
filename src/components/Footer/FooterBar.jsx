import React from "react";
import "./FooterBar.css";

import mainLogo from "../../assets/mainLogo.png";

const FooterBar = () => {
  return (
    <div>
      <div>
        <div className="footer-container">
          <h3 id="head">Plantism</h3>
          <h4 id="madeBy">Design & Develop : Thananys S.</h4>
          <div className="contact-container">
            <h3 id="contact">Contact</h3>
            <li>E-mail : Thananya.sih@gmail.com</li>
            <li>
              GitHub : <a href="/">Thananya S.</a>
            </li>
          </div>
          <img src={mainLogo} alt="logo" className="img-logo" />
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
