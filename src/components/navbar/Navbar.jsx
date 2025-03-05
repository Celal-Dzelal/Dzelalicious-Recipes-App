import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        Dzelalicious
        <span>Recipes</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <FaHamburger />
      </Hamburger>
      <Menu open={open} onClick={() => setOpen(false)}>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/Celal-Dzelal">Github</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
