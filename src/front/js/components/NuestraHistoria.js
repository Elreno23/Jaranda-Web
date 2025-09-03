import React,{useLayoutEffect} from "react";
import { useLocation } from "react-router-dom";
import img1 from "../../img/Copilot_20250629_080155.png";
import "../../styles/NuestraHistoria.css";
import { Link } from "react-router-dom";

const NuestraHistoria = () => {
  const location = useLocation();
    useLayoutEffect(() => {
    const hash = location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        // Esperamos un poco más para asegurar que todo esté montado
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      };
    };
  }, [location]);
  return (
    <section>
    
      <div className="container-fluid nuestraHistoria" id="nuestra-historia">
        <div className="row">
          <div className="col-6">
            <div className="nuestra-historia-info">
              <h4>Nuestra Historia</h4>
              <h2>En ensanche desde 2005...</h2>
              <hr/>
              <p>
                <span>Jaranda es una empresa familiar fundada en 2005</span>, con una
                profunda dedicación a la panadería, pastelería, cafetería y
                hostelería, elaborando cada producto en su obrador propio. Desde
                nuestros inicios, apostamos por la calidad artesanal, combinando
                recetas tradicionales con un toque actual. En nuestros locales
                podés disfrutar de una amplia variedad de delicias: desde un
                buen café o nuestras clásicas pastas de té, hasta helados
                artesanos y tartas personalizadas para cada ocasión. Lo que nos
                define es el cariño en cada detalle y un trato cercano y
                especial. <span>Te invitamos a visitarnos y a descubrir el sabor de lo
                hecho con alma.</span>
              </p>
              
            </div>
          </div>
          <div className="col-6">
            <div className="nuestra-historia-img">
              <img src={img1} alt="Nosotros" />
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="ventana-scroll">
            <div className="reveal-scroll">
              <h2>PRODUCTOS 100% ARTESANOS</h2>
              <Link to={"/productos/#pasteleria"}>Descubrelos</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NuestraHistoria;
