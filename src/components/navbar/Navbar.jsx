import React, { useContext, useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { FaHamburger } from "react-icons/fa";
import { AuthContextArea } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logOut } = useContext(AuthContextArea);
  return (
    <Nav>
      <Logo to="/home" onClick={() => setOpen(false)}>
        Dzelalicious
        <span>Recipes</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <FaHamburger />
      </Hamburger>
      <Menu open={open} onClick={() => setOpen(false)}>
        <MenuLink to="/about">About</MenuLink>
        <a href="https://github.com/Celal-Dzelal">Github</a>
        <MenuLink onClick={() => logOut()}>Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
