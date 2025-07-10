import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";


import injectContext from "./store/appContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Productos from "./components/Productos";
import NuestraHistoria from "./components/NuestraHistoria";
import Inicio from "./components/Inicio";
import BarraLinks from "./components/BarraLinks";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  //if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return (<p>Tienes que configurar BACKEND_URL en .env</p>);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
            <BarraLinks/>
            <Inicio/>
          <Routes>
            <Route element={<Productos />} path="/productos" />
            <Route element={<NuestraHistoria />} path="/nuestra-historia" />
          </Routes>

          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
