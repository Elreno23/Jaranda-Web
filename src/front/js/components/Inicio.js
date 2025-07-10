import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "../../img/Copilot_20250629_075220.png";
import img2 from "../../img/Copilot_20250629_075620.png";
import img3 from "../../img/Copilot_20250629_075950.png";

import "../../styles/Inicio.css"; // Archivo opcional para los estilos

const Inicio = () => {
  const slides = [
    {
      img: img1,
      titulo: "Bienvenidos a Jaranda",
      link: "/productos",
      textoBoton: "Los mejores sabores",
    },
    {
      img: img2,
      titulo: "Conoce nuestra Historia",
      link: "/Nuestra-Historia",
      textoBoton: "descubrenos",
    },
    {
      img: img3,
      titulo: "Los mejores Panes",
      link: "/productos",
      textoBoton: "Panes",
    },
  ];
  const retrocediendoRef = useRef(false);
  const zoomRef = useRef(null);
  const scaleRef = useRef(0.5);
  const [actual, setActual] = useState(0);
  const [anterior, setAnterior] = useState(null);

  useEffect(() => {
    let rafId;
    const max = 1.8;
    const min = 0.5;
    const velocidad = 0.0002;

    const animarZoom = () => {
      if (!zoomRef.current) return;
      // 💡 Aplicar transición constante(irrelevante para los valores actuales)
      // zoomRef.current.style.transition = "transform 0.4s ease-in-out";
      if (scaleRef.current < max && !retrocediendoRef.current) {
        scaleRef.current += velocidad;
      } else {
        retrocediendoRef.current = true;
        scaleRef.current -= velocidad;

        if (scaleRef.current <= min) {
          scaleRef.current = min;
          retrocediendoRef.current = false;
        }
      }
      zoomRef.current.style.transform = `scale(${scaleRef.current})`;
      rafId = requestAnimationFrame(animarZoom);
    };
    animarZoom();
    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAnterior(actual); // guardamos la imagen anterior
      setActual((prev) => (prev + 1) % slides.length); // pasamos a la siguiente
    }, 9000);

    return () => clearInterval(intervalo); // limpieza al desmontar
  }, [actual, slides.length]);

  return (
    <div
      className="container-fluid inicio"
      role="img"
      aria-label="Imagen de la pastelería Jaranda"
    >
      <div className="border-interior"></div>
      <div className="contenido-hero-jaranda">
        <h1> {slides[actual].titulo} </h1>
        <Link to={slides[actual].link} className="btn-jaranda">
          {slides[actual].textoBoton}
        </Link>
      </div>
      <div className="inicio-img-wrapper" ref={zoomRef}>
        {anterior !== null && (
          <img
            className="fade-out"
            key={`prev-${anterior}`}
            src={slides[anterior].img}
            alt="Imagen Jaranda"
          />
        )}
        <img
          className="fade-in"
          key={`actual-${actual}`}
          src={slides[actual].img}
          alt="Imagen Jaranda"
        />
      </div>
    </div>
  );
};
export default Inicio;
