import React from "react";
import "./FooterBar.css";

import mainLogo from "../../assets/mainLogo.png";

const FooterBar = () => {
  return (
    <div>
      <div>
        <div className="footer-container">
          <h3>Plantism</h3>
        </div>
        <img src={mainLogo} alt="logo" className="img-logo" />
      </div>
    </div>
  );
};

export default FooterBar;
