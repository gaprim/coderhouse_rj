import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo"
import {NavLink} from "react-router-dom";
import "./Navbar.css";


function Navbar() {
    return (
    <div className="Navbar">
      <nav className="leftSide">
        <NavLink activeClassName="active-logo" exact to="/"><Logo /></NavLink>
        <ul className="links"> 
          <NavLink activeClassName="active" exact to="/"><li>Home</li></NavLink>
          <NavLink activeClassName="active" exact to="/about"><li>About us</li></NavLink>
          <NavLink activeClassName="active" exact to="/contact"><li>Contact</li></NavLink>
        </ul>
      </nav>
      <nav className="rightSide">
        <CartWidget />
      </nav>
    </div>
  );
}

export default Navbar;
