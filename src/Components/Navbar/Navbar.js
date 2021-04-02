import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";


function Navbar() {
    return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links"> 
          <a href="/home">Home</a>
          <a href="/productos"> Productos</a>
          <a href="/about-us">Quienes somos</a>
          <a href="/contact">Contacto</a>
        </div>
      </div>
      <div className="rightSide">
        <CartWidget />
      </div>
    </div>
  );
}

export default Navbar;
