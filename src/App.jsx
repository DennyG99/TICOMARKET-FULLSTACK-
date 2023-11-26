import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
// import Body from "./components/Body/Body";
// import Dashboard from "./components/Body/Dashboard";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";
// import { GestionModerador } from "./components/GestionAdministrador/gestionModerador";
// import { GestionSuperAdministrador } from "./components/GestionAdministrador/gestionSuperAdmin";
// import ApartadoEstadosV2 from "./components/GestionarEstados/ApartadoEstadosV2";
// import { CardPoliticas } from "./components/GestionAdministrador/Politicas/CardPoliticas";
// import { CardPlanes } from "./components/GestionAdministrador/Planes/CardPlanes";
import Dashboard from "./components/Body/Dashboard";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const NotFound = () => {
  return <Navigate to="/error404" />;
};

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <div className="wrapper">
          <Sidebar />
          <Header />
          <Routes>
            <Route path="/" element={""} />
            <Route path="/prueba" element={<Dashboard />} />
            {
              "aqui va el contenido y las routes de la pagina, eso se encarga nikolayk, firma, nikolayk XD"
            }
            <Route path="*" element={<NotFound />} />
            <Route path="/error404" element={<Error404 />} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
