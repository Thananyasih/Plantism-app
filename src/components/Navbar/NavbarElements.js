import React from "react";
import "./NavbarElement.css";

const NavbarElement = () => {
  return (
    <div>
      <div className="nav-container">
        <a className="nav-link" href="/Home">
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
