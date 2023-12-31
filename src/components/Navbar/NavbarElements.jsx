import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarElement.css";

const NavbarElement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChangingPage, setIsChangingPage] = useState(false)

  const openHandler = () => {
    setIsOpen(isOpen);
    setIsChangingPage(isChangingPage)
  };

  useEffect(() => {
    window.scrollTo(0,0);
    
  }, [isChangingPage])

  return (
    <nav>
      <div className="nav-container">
        <div className="head-logo">
          <h1>PLANTISM</h1>
        </div>

        <div className="link-wrapper">
          <ul>
            <NavLink
              to="/"
              className={isOpen ? "active" : "nav-link"}
              onClick={openHandler}
            >
              Home
            </NavLink>

            <NavLink
              className={isOpen ? "active" : "nav-link"}
              to="/About"
              exact
              onClick={openHandler}
            >
              About
            </NavLink>

            <NavLink
              className={isOpen ? "active" : "nav-link"}
              to="/Plantalog"
              exact
              onClick={openHandler}
            >
              Plantalog
            </NavLink>

            <NavLink
              className={isOpen ? "active" : "nav-link"}
              to="/Design"
              exact
              onClick={openHandler}
            >
              Design | Space
            </NavLink>

            <NavLink
              className={isOpen ? "active" : "nav-link"}
              to="/Blogs"
              exact
              onClick={openHandler}
            >
              Blogs
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarElement;
