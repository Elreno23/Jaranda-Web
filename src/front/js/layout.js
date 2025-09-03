import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import injectContext from "./store/appContext";
import Productos from "./components/Productos";
import NuestraHistoria from "./components/NuestraHistoria";
import Ubicacion from "./components/Ubicacion";
import App from "./pages/App";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  //if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return (<p>Tienes que configurar BACKEND_URL en .env</p>);

  return (
    <>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<App />}>
            <Route path="/" element={<></>} />
            <Route element={<Productos />} path="/productos" />
            <Route element={<NuestraHistoria />} path="/nuestra-historia" />
            <Route element={<Ubicacion/>} path="/Ubicacion"/>
            <Route element={<Galeria/>} path="/Galeria"/>
          </Route>
          </Routes>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default injectContext(Layout);
