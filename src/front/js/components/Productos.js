import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Productos.css";
import prueba1 from "../../img/Copilot_20250629_075220.png";
import prueba2 from "../../img/Copilot_20250629_075620.png";
import prueba3 from "../../img/Copilot_20250629_075950.png";
import prueba4 from "../../img/Copilot_20250629_080155.png";
import prueba5 from "../../img/Copilot_20250629_080402.png";
import prueba6 from "../../img/Copilot_20250629_080647.png";

const Productos = () => {
  const categorias = {
    Pasteleria: { titulo: "Tarta de frutas", imagen: prueba1 },
    Bolleria: { titulo: "Croissant", imagen: prueba2 },
    Panaderia: { titulo: "Pan integral", imagen: prueba3 },
    Salados: { titulo: "Empanada", imagen: prueba4 },
    Surtidos: { titulo: "Surtido de galletas", imagen: prueba5 },
    Temporada: { titulo: "Roscón de Reyes", imagen: prueba6 }
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

    <section className="categoria" >
      <div className="container-fluid productos">
        {Object.entries(categorias).map(([nombre, items]) => (
          <div className="card text-center" key={nombre} id={nombre}>
            <h2>{nombre}</h2>
            <div className="card-img-wrapper">
              <img
                src={items.imagen}
                className="card-img-top"
                alt="dffd"
              />
            </div>
            <div className="card-img-overlay">
              <h5 className="card-title">{items.titulo} </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a
                little bit longer.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>


  );
};

export default Productos;
