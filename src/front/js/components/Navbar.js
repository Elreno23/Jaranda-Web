import React from "react";
import "../../styles/Navbar.css";
import { Link} from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav>
     
      <Link className="logo" to={"/"}>
        JARA<span>N</span>DA
      </Link>

      <div className="ubicaciones-jaranda">
        <a
          href="https://www.google.com/maps?q=Calle+Pedrosa+del+Príncipe+1,+28051+Madrid"
          target="_blank"
          rel="noopener noreferrer"
          className="link-mapa"
        >
          <i class="fa-solid fa-location-dot"></i>
          <p>Calle Pedrosa del Príncipe, 1 -28051- Madrid </p>
          <p>(91 332 92 39)</p>
        </a>

        <span className="separador">||</span>

        <a
          href="https://www.google.com/maps?q=Calle+de+Talamanca+del+Jarama+26,+28051+Madrid"
          target="_blank"
          rel="noopener noreferrer"
          className="link-mapa"
        >
          <i class="fa-solid fa-location-dot"></i>
          <p>Calle de Talamanca del Jarama, 26 -28051- Madrid </p>
          <p>(911 70 09 92)</p>
        </a>
      </div>
      <div className="order">
          <p>HAZ TU PEDIDO</p>
          <i className="fa-brands fa-whatsapp"></i>
      </div>
    </nav>
  );
};

export default Navbar;
