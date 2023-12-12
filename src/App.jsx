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
import ResumenesEstadisticos from "./components/Body/ResumenesEstadisticos/ResumenesEstadisticos.jsx";
// import GestionUsuario from "./components/Body/GestionUsuario/GestionUsuario.jsx";
import MonitorearActividades from "./components/Body/MonitorearActividades/monitorearActividades.jsx";
import CardVendedoresD from "./components/Body/Vendedores/CardVendedor.jsx";
import GestionSuperAdmin from "./components/Body/GestionAdministrador/gestionSuperAdmin.jsx";
// import CambioPass from "./components/Body/CambioPass/CambioPass.jsx";
// import { Products } from "./components/Body/TicoMarket/Products.jsx";

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
            {/* Rutas publicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/Verificacion" element={<Verificacion />} />

            {/* Rutas privadas */}
            <Route
              path="/"
              element={isAuthenticated ? <ResumenesEstadisticos /> : <Login />}
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <ResumenesEstadisticos /> : <Login />}
            />
            <Route
              path="*"
              element={isAuthenticated ? <NotFound /> : <Login />}
            />
            <Route
              path="/error404"
              element={isAuthenticated ? <Error404 /> : <Login />}
            />
            <Route
              path="/estados"
              element={isAuthenticated ? <ApartadoEstadosV2 /> : <Login />}
            />
            <Route
              path="/politicas"
              element={isAuthenticated ? <CardPoliticas /> : <Login />}
            />
            <Route
              path="/planes"
              element={isAuthenticated ? <CardPlanes /> : <Login />}
            />
            <Route
              path="/moderador"
              element={isAuthenticated ? <GestionModerador /> : <Login />}
            />
            <Route
              path="/administradores"
              element={isAuthenticated ? <GestionSuperAdmin /> : <Login />}
            />
            {/* <Route
              path="/usuarios"
              element={isAuthenticated ? <GestionUsuario /> : <Login />}
            /> */}
            <Route
              path="/vendedores"
              element={isAuthenticated ? <CardVendedoresD /> : <Login />}
            />
            <Route
              path="/monitoreo"
              element={isAuthenticated ? <MonitorearActividades /> : <Login />}
            />
            {/* <Route
              path="/passchange"
              element={isAuthenticated ? <CambioPass /> : <Login />}
            /> */}
          </Routes>
          {isAuthenticated && <Footer />}
        </div>
      </>
    </Router>
  );
}

export default App;
