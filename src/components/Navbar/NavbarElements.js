import React from "react";
import "./NavbarElement.css";

const NavbarElement = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-head-container">
          <a href="/Home">Home</a>
          <a href="/About">About</a>
          <a href="/Plantalog">Plantalog</a>
          <a href="/Design">Design Space</a>
          <a href="/Blogs">Blogs</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarElement;
