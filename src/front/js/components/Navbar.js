import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const links = [
    { url: "/productos#pasteleria", texto: "Pastelería" },
    { url: "/productos#bolleria", texto: "Bollería" },
    { url: "/productos#panaderia", texto: "Panadería" },
    { url: "/productos#salados", texto: "Salados" },
    { url: "/productos#surtidos", texto: "Surtidos" },
    { url: "/productos#temporada", texto: "Temporada" },
  ];
  const mensaje = "Hola Jaranda, quiero hacer un pedido.";
  const linkWhatsapp = `https://wa.me/34616296214?text=${mensaje}`;
  const linkInstagram = "https://www.instagram.com/pasteleriajaranda/";

  const location = useLocation();
  const navigate = useNavigate();
  /* const [scrolled, setScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 60);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
   
   ${scrolled ? "scrolled" : ""}*/

  const handleDropdownClick = (e) => {
    e.preventDefault();
    navigate("/productos/#pasteleria");
  };

  return (
    <header>
      <nav className={`navbar navbar-expand-lg  ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid nav">
          <Link className="navbar-brand" to={"/"}>
            JARANDA
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleDropdownClick}>
                  Productos
                </a>
                <ul className="dropdown-menu">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link className="dropdown-item" to={link.url}>
                        {link.texto}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {location.pathname !== "/nuestra-historia" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/nuestra-historia">
                    Nuestra Historia
                  </Link>
                </li>
              )}
              {location.pathname !== "/ubicacion" && (

                <li className="nav-item">
                  <Link className="nav-link" to="/ubicacion">
                    ubicacion
                  </Link>
                </li>
              )}
              {location.pathname !== "/galeria" && (
                <li className="nav-item">
                  <Link className="nav-link" to="/galeria#galeria">
                    Galeria
                  </Link>
                </li>
              )}
            </ul>
          </div>
        <div className="social-icons d-flex gap-2">
          <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="order">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href={linkInstagram} target="_blank" rel="noreferrer" className="insta">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        </div>
      </nav>
    </header >

  );
};

export default Navbar;
