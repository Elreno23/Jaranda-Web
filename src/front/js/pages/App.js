import React from "react";
import { Outlet } from "react-router-dom";
import Inicio from "../components/Inicio";

export const App = () => {
  return (
    <>
      
      <Inicio /> {/*  Sección visible en todas las páginas */}
      <Outlet /> {/* Aquí se renderiza el contenido de cada ruta */}
      
    </>
  );
};
export default App;
