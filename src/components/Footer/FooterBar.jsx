import React from "react";
import "./FooterBar.css";

import mainLogo from "../../assets/mainLogo.png";
import githubLogo from "../../assets/github-mark.png";
import emailLogo from "../../assets/gmail.png";

const FooterBar = () => {
  return (
    <div>
      <div>
        <div className="footer-container">
          <h3 id="head">Plantism</h3>
          <h4 id="madeBy">Design & Develop : Thananya S.</h4>
          <div className="contact-container">
            <h3 id="contact">Contact</h3>

            <li>
              <img src={emailLogo} alt="email Logo" className="email-logo" />
              <a href="https://github.com/Thananyasih">Thananya.sih@gmail.com</a>
              
            </li>
            <li>
              <img src={githubLogo} alt="github Logo" href="https://github.com/Thananyasih"className="github-logo" />
              <a href="https://github.com/Thananyasih">ThananyaSih</a>
            </li>
          </div>
          <img src={mainLogo} alt="logo" className="img-logo" />
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
