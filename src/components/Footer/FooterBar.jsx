import React from "react";
import "./FooterBar.css";

import mainLogo from "../../assets/mainLogo.png";

const FooterBar = () => {
  return (
    <div>
      <div>
        <div className="footer-container">
          <h3 id="head">Plantism</h3>
          <h4 id="madeBy">create by : Thananys S.</h4>
          <div className="contact-container">
            <h3 id="contact">Contact</h3>
            <li>E-mail :</li>
            <li>GitHub :</li>
          </div>
        </div>
        <img src={mainLogo} alt="logo" className="img-logo" />
      </div>
    </div>
  );
};

export default FooterBar;
