import React, {useLayoutEffect} from "react";
import { useLocation } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../../styles/Galeria.css";
import prueba1 from "../../img/prueba1.jpg"
import prueba2 from "../../img/prueba2.webp"
import prueba3 from "../../img/prueba3.webp"
import prueba4 from "../../img/prueba4.webp"
import prueba5 from "../../img/prueba5.webp"
import prueba6 from "../../img/prueba6.webp"
import prueba7 from "../../img/prueba7.webp"
import prueba8 from "../../img/prueba3.webp"
import prueba9 from "../../img/prueba4.webp"

const Galeria = () => {

    const imagenes = [prueba1, prueba2, prueba3, prueba4, prueba5, prueba6, prueba7, prueba8, prueba9];
    const location = useLocation();
    useLayoutEffect(()=>{
        const hash = location.hash;
        if(hash){
            const target = document.querySelector(hash);
        if(target){
            setTimeout(()=>{
                target.scrollIntoView({behavior:"smooth",block:"start"});
            },300)
        };
        };
    },[location]);



    return (
        <div className="container-fluid galeria"  id="galeria">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="0px">
                {imagenes.map((img, index) => (
                <div className="img-wrapper" key={index}>
                    <img  key={index} src={img} alt="" className="foto"/>
                </div>
                ))}

            </Masonry>
        </ResponsiveMasonry>
        </div>

    );
};
export default Galeria;
/*                {grupos.map((grupo, grupoIndex) => (
                    <div className="group-galeria" key={grupoIndex}>
                        {[0, 1].map((filaIndex) => (
                            <div className="fila-galeria" key={filaIndex}>
                                {grupo.slice(filaIndex * 2, filaIndex * 2 + 2).map((info, index) => {
                                    const posicionAbsoluta = filaIndex * 2 + index;

                                    // Esquinas redondeadas
                                    let esquina = "";
                                    if (posicionAbsoluta === 0) esquina = "esquina-superior-izquierda";
                                    if (posicionAbsoluta === 1) esquina = "esquina-superior-derecha";
                                    if (posicionAbsoluta === 2) esquina = "esquina-inferior-izquierda";
                                    if (posicionAbsoluta === 3) esquina = "esquina-inferior-derecha";

                                    // Dirección del texto
                                    let direccionTexto = "";
                                    if (filaIndex === 0) {
                                        direccionTexto = index === 0 ? "texto-izquierda" : "texto-derecha";
                                    } else {
                                        direccionTexto = index === 0 ? "texto-derecha" : "texto-izquierda";
                                    }

                                    return (
                                        <div
                                            className={`bloque ${index % 2 === 0 ? "derecha" : "izquierda"} ${esquina}`}
                                            key={index}
                                        >
*/ 