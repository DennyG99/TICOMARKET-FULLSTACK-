import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

// Import del login
import Login from "./components/Login/Login.jsx";
import Verificacion from "./components/Login/Verificacion.jsx";

// Configuración de rutas permanentes
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Body/Error404/Error404.jsx";

// Configuración de rutas de componentes
import ApartadoEstadosV2 from "./components/Body/GestionarEstados/ApartadoEstadosV2";
import CardPoliticas from "./components/Body/Politicas/CardPoliticas.jsx";
import CardPlanes from "./components/Body/Planes/CardPlanes.jsx";
import GestionModerador from "./components/Body/GestionAdministrador/GestionModerador.jsx";
import GestionSuperAdmin from "./components/Body/GestionAdministrador/GestionSuperAdmin.jsx";
import ResumenesEstadisticos from "./components/Body/ResumenesEstadisticos/ResumenesEstadisticos.jsx";
import GestionUsuario from "./components/Body/GestionUsuario/GestionUsuario.jsx";
import GestionarVendedores from "./components/Body/Vendedores/GestionarVendedores.jsx";
import MonitorearActividades from "./components/Body/MonitorearActividades/monitorearActividades.jsx";

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

const NoBackButton = () => {
  useEffect(() => {
    const disableBackButton = (event) => {
      event.preventDefault();
      window.history.forward();
    };
    window.addEventListener("popstate", disableBackButton);
    return () => {
      window.removeEventListener("popstate", disableBackButton);
    };
  }, []);

  return null;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    
  }, []);

  return (
    <Router>
      <>
        <NoBackButton />
        <ScrollToTop />

        <div className="wrapper">
          {isAuthenticated && <Header />}
          {isAuthenticated && <Sidebar />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Verificacion" element={<Verificacion />} />
            <Route path="/" element={<ResumenesEstadisticos />} />
            <Route path="/dashboard" element={<ResumenesEstadisticos />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/estados" element={<ApartadoEstadosV2 />} />
            <Route path="/politicas" element={<CardPoliticas />} />
            <Route path="/planes" element={<CardPlanes />} />
            <Route path="/moderador" element={<GestionModerador />} />
            <Route path="/administradores" element={<GestionSuperAdmin />} />
            <Route path="/usuarios" element={<GestionUsuario />} />
            <Route path="/vendedores" element={<GestionarVendedores />} />
            <Route path="/monitoreo" element={<MonitorearActividades />} />
          </Routes>
          {isAuthenticated && <Footer />}
        </div>
      </>
    </Router>
  );
}

export default App;
