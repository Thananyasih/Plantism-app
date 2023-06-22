import React from "react";
import "./NavbarElement.css";

const NavbarElement = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="head-logo">
          <h1>PLANTISM</h1>
        </div>
        <a className="active" href="/Home">
          Home
        </a>
        <a className="nav-link" href="/About">
          About
        </a>
        <a className="nav-link" href="/Plantalog">
          Plantalog
        </a>
        <a className="nav-link" href="/Design">
          Design | Space
        </a>
        <a className="nav-link" href="/Blogs">
          Blogs
        </a>
      </div>
    </div>
  );
};

export default NavbarElement;
