import React, { useState, useEffect } from "react";
import "../../styles/Navbar.css";
import BarraLinks from "./BarraLinks";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);



  return (
    <nav  className={`main-nav ${scrolled ? "scrolled" : "restored"}`}>
      <BarraLinks />
    </nav>

  );
};

export default Navbar;
