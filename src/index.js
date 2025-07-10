import React from "react";
import ReactDOM from "react-dom/client";
import "./front/styles/index.css"; // Ajusta la ruta si es necesario
import Layout from "./front/js/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Opcional, solo si usas componentes interactivos


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);