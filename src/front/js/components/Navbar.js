import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    { url: "/productos#Pasteleria", texto: "Pastelería" },
    { url: "/productos#Bolleria", texto: "Bollería" },
    { url: "/productos#Panaderia", texto: "Panadería" },
    { url: "/productos#Salados", texto: "Salados" },
    { url: "/productos#Surtidos", texto: "Surtidos" },
    { url: "/productos#Temporada", texto: "Temporada" },
  ];
  const mensaje = "Hola Jaranda, quiero hacer un pedido.";
  const linkWhatsapp = `https://wa.me/34616296214?text=${mensaje}`;
  const linkInstagram = "https://www.instagram.com/pasteleriajaranda/";

  const location = useLocation();

  return (
    <header>
      <nav className={`navbar navbar-expand-lg  ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid nav">
          <Link className="navbar-brand" to={"/"}>
            JARA<span>N</span>DA
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                  <Link className="nav-link" to="/nuestra-historia#nuestra-historia">
                    Nuestra Historia
                  </Link>
                </li>
              )}
              {location.pathname !== "/ubicacion" && (

                <li className="nav-item">
                  <Link className="nav-link" to="/ubicacion#ubicacion">
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
