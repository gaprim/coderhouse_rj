import React, { useState } from "react";

import "../App.css";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={showLinks ? "hidden" : ""}> 
          <a href="/home">Home</a>
          <a href="/productos"> Productos</a>
          <a href="/about-us">Quienes somos</a>
          <a href="/contact">Contacto</a>
        </div>
        <button onClick={()=> setShowLinks(!showLinks)}>Menu</button>
      </div>
      <div className="rightSide">
          <input type = "text" placeholder="Buscar..." />
          <button>Buscar</button>
      </div>
    </div>
  );
}

export default Navbar;
