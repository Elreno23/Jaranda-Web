import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // o { top: 0, behavior: "smooth" } si querés con efecto
  }, [pathname]);

  return children;
};

export default ScrollToTop;
