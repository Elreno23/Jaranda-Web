import React,{useState, useEffect, useRef} from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import BarraLinks from "./BarraLinks";

const Navbar = () => {
  const navRef = useRef(null);
 const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if(!entry.isIntersecting){ //True si el nav no se ve.
            setScrolled(true);
          } else {
            // Espera 300ms antes de ocultar ghost-nav
            setTimeout(() => setScrolled(false), 300);
          }
        },
        { threshold: 1.0}        
      );
       if(navRef.current) observer.observe(navRef.current)
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
      <div className="order">
        <p>HAZ TU PEDIDO</p>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
      <div className={`ghost-nav ${scrolled ? "scrolled" : ""}`}>
          <div className="logo-links">
      <Link className="logo" to={"/"}>
        JARA<span>N</span>DA
      </Link>
      <BarraLinks />
      </div>
      <div className="order">
        <p>HAZ TU PEDIDO</p>
        <i className="fa-brands fa-whatsapp"></i>
      </div>

      </div>
    </nav>
  );
};

export default Navbar;
