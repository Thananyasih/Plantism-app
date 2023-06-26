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
        <div className={`navbar-start ${isOpen && "is-active"}`}>
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="/"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </NavLink>
          <NavLink className="nav-link" href="/About">
            About
          </NavLink>
          <NavLink className="nav-link" href="/Plantalog">
            Plantalog
          </NavLink>
          <NavLink className="nav-link" href="/Design">
            Design | Space
          </NavLink>
          <NavLink className="nav-link" href="/Blogs">
            Blogs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavbarElement;
