import React from "react";
import "./footer.css";

import mainLogo from "../../assets/mainLogo.png";

const Footer = () => {
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

export default Footer;
