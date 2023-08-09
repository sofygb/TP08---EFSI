import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

export default function Nav(){

  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/mapa">Puntos Verdes</Link>
              <Link to="/informacion">Más Información</Link>
           </ul>
        </div>
  );

}