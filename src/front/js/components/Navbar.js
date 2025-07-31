import React, { useState, useEffect, useRef } from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import BarraLinks from "./BarraLinks";

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const mensaje = "Hola Jaranda, quiero hacer un pedido.";
  const linkWhatsapp = `https://wa.me/34616296214?text=${mensaje}`;
  const linkInstagram = "https://www.instagram.com/pasteleriajaranda/";

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) { //True si el nav no se ve.
        setScrolled(true);
      } else {
        // Espera 300ms antes de ocultar ghost-nav
        setTimeout(() => setScrolled(false));
      }
    },
      { threshold: 1.0 }
    );
    if (navRef.current) observer.observe(navRef.current)
    return () => observer.disconnect();
  }, []);



  return (
    <nav ref={navRef} className={`main-nav ${!scrolled ? "restored" : ""}`}>
      <div className="logo-links">
        <Link className="logo" to={"/"}>
          JARA<span>N</span>DA
        </Link>
        <BarraLinks />
      </div>
        
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="order">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
        <a href={linkInstagram} target="_blank" rel="noreferrer" className="insta">
        <i class="fa-brands fa-instagram"></i>
      </a>
      
      <div className={`ghost-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-links">
          <Link className="logo" to={"/"}>
            JARA<span>N</span>DA
          </Link>
          <BarraLinks />
        </div>
        <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="order">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href={linkInstagram} target="_blank" rel="noreferrer" className="insta">
        <i class="fa-brands fa-instagram"></i>
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
