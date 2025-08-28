import React,{useEffect} from "react";
import "../../styles/Galeria.css";
import img1 from "../../img/Copilot_20250629_075950.png"
import img2 from "../../img/Copilot_20250629_075620.png"
import img3 from "../../img/Copilot_20250629_075220.png"
import img4 from "../../img/Copilot_20250629_080155.png"
import img5 from "../../img/Copilot_20250629_080402.png"
import img6 from "../../img/Copilot_20250629_080647.png"
const Galeria = () => {
    const imagenes = [img1, img2, img3, img4, img5, img6];

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100); // pequeño delay para asegurar que el DOM esté listo
            }
        }
    }, []);
    return (
        <div className="container-fluid">
                <section id="galeria">
            <div className="row">
                {imagenes.map((img, index) => (
                    <div className="col-3" key={index} id="galeria" style={{ scrollMarginTop: "100px" }}>
                        <div className="card m-1">
                            <img src={img} className="card-img-top" alt="..." />
                        </div>
                    </div>
                ))}
            </div>
                </section>
        </div>
    );
};
export default Galeria;