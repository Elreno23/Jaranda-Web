import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../styles/BarraLinks.css";
const BarraLinks = () => {
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

    <div className="barra-links">
      <Link className="logo" to={"/"}>
                  JARA<span>N</span>DA
                </Link>
      <div className="btn-group">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handleDropdownClick}
        >
          Productos
        </button>
        <ul className="dropdown-menu">
          {links.map((link, id) => (
            <li key={id}>
              <Link className="dropdown-item" to={link.url}>
                {link.texto}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {location.pathname !== "/Nuestra-Historia" && (
        <Link className="nuestra-historia" to="/Nuestra-Historia">
          Nuestra Historia
        </Link>
      )}
      {location.pathname !== "/Ubicacion" && (
        <Link className="ubicacion" to="/Ubicacion">
          Ubicación
        </Link>
      )}
      {location.pathname !== "/Galeria" && (
        <Link className="galeria" to="/Galeria#galeria">
          Galeria
        </Link>
      )}
      <a href={linkWhatsapp} target="_blank" rel="noreferrer" className="order">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a href={linkInstagram} target="_blank" rel="noreferrer" className="insta">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};
export default BarraLinks;