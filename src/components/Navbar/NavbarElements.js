import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarElement.css";

const NavbarElement = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="nav-container">
        <div className="head-logo">
          <h1>PLANTISM</h1>
        </div>
        <div className="link-wrapper">
          <ul>
            <Link
              className="active"
              activeClassName="is-active"
              to="/"
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>

            <Link
              className="nav-link"
              activeClassName="is-active"
              to="/About"
              exact
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>

            <Link
              className="nav-link"
              activeClassName="is-active"
              to="/Plantalog"
              exact
              onClick={() => setIsOpen(!isOpen)}
            >
              Plantalog
            </Link>

            <Link
              className="nav-link"
              activeClassName="is-active"
              to="/Design"
              exact
              onClick={() => setIsOpen(!isOpen)}
            >
              Design | Space
            </Link>

            <Link className="nav-link" href="/Blogs">
              Blogs
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarElement;
