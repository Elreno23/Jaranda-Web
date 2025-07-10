import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Productos.css";
import prueba1 from "../../img/Copilot_20250629_075220.png";
import prueba2 from "../../img/Copilot_20250629_075620.png";
import prueba3 from "../../img/Copilot_20250629_075950.png";
import prueba4 from "../../img/Copilot_20250629_080155.png";
import prueba5 from "../../img/Copilot_20250629_080402.png";
import prueba6 from "../../img/Copilot_20250629_080647.png";
import prueba7 from "../../img/Copilot_20250629_080905.png";

const Productos = () => {
  const categorias = {
    pasteleria: [
      { texto: "Tarta de frutas", imagen: prueba1 },
      { texto: "Sacher", imagen: prueba2 },
      { texto: "Sacher", imagen: prueba3 },
    ],
    bolleria: [
      { texto: "Croissant", imagen: prueba4 },
      { texto: "Napolitana", imagen: prueba5 },
      { texto: "Napolitana", imagen: prueba6 },
    ],
    panaderia: [
      { texto: "Pan integral", imagen: prueba7 },
      { texto: "Pan rústico", imagen: prueba1 },
      { texto: "Pan rústico", imagen: prueba2 },
    ],
    salados: [
      { texto: "Empanada", imagen: prueba3 },
      { texto: "Saladito de jamón", imagen: prueba4 },
      { texto: "Saladito de jamón", imagen: prueba5 },
    ],
    surtidos: [
      { texto: "Surtido de galletas", imagen: prueba6 },
      { texto: "Pastas variadas", imagen: prueba7 },
      { texto: "Pastas variadas", imagen: prueba1 },
    ],
    temporada: [
      { texto: "Roscón de Reyes", imagen: prueba2 },
      { texto: "Panellets", imagen: prueba3 },
      { texto: "Panellets", imagen: prueba4 },
    ],
  };
 const location = useLocation(); // 👈 Obtenemos la ruta actual, incluyendo el hash (#)

useEffect(() => {
  const hash = location.hash; // 👉 Captura el hash de la URL, como "#bolleria"
  if (hash) {
    const target = document.querySelector(hash); // 🔍 Busca el elemento con ese id en el DOM
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" }); // 🚀 Desplaza suavemente hasta esa sección
      }, 100); // 🕒 Espera 100ms para asegurarse de que el componente ya se renderizó
    }
  }
}, [location]); // 🔁 Se vuelve a ejecutar si cambia la URL (por ejemplo, al hacer clic en otro link con hash)
  return (
   <>
   
  
    <div className="productos" >
        {Object.entries(categorias).map(([nombre, items]) => (
          <section key={nombre} id={nombre} className="categoria">
            <h2>{nombre}</h2>
            <div className="row">
              {items.map((card, id) => (
                <div className="col-md-4 mb-4" key={id}>
                  <div className="card text-center">
                    <div className="card-img-wrapper">
                      <img
                        src={card.imagen}
                        className="card-img-top"
                        alt={card.texto}
                      />
                    </div>
                    <div className="card-img-overlay">
                      <h5 className="card-title">{card.texto} </h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      
    </div>
  
    </>
  );
};

export default Productos;
