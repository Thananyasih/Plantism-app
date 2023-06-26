import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarElement.css";

const NavbarElement = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
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
    </nav>
  );
};

export default NavbarElement;
