import React,{useState, useEffect} from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import BarraLinks from "./BarraLinks";

const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      
      

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
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
    </nav>
  );
};

export default Navbar;
