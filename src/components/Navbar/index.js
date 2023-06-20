import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars>
          <NavMenu>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/plantalog" activeStyle>
              Plantalog
            </NavLink>
            <NavLink to="/design" activeStyle>
              Design Space
            </NavLink>
            <NavLink to="/blogs" activeStyle>
              Blogs
            </NavLink>
          </NavMenu>
        </Bars>
      </Nav>
    </>
  );
};

export default Navbar;
