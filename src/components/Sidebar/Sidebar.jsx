import React from "react";
import BodyConfig from "../Body/BodyConfig/BodyConfig";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const headers = {
        Accept: "application/json",
        UserAgent: "",
        Authorization: `Bearer ${token}`,
      };

      fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: headers,
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          localStorage.removeItem("userData");
          navigate("/login");
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error al cerrar sesión:", error);
        });
    }
  };
  return (
    <>
      <BodyConfig />
      <div className="sidebar-wrapper" data-simplebar="true">
        <div className="sidebar-header">
          <Link to="/dashboard">
            <img
              src="assets/images/LOGO TM - LITTLE.png"
              className="logo-icon"
              alt="logo icon"
            />
          </Link>
          <Link to="/dashboard">
            <h4 className="logo-text">TICOMARKET</h4>
          </Link>
          <div className="toggle-icon ms-auto">
            <i className="bx bx-arrow-to-left" />
          </div>
        </div>

        <ul className="metismenu" id="menu">
          <li>
            <a href="javascript:;" className="has-arrow">
              <div className="parent-icon">
                <i className="bx bx-category" />
              </div>
              <div className="menu-title">Application</div>
            </a>
            <ul>
              <li>
                <Link to="/estados">
                  <i className="bx bx-right-arrow-alt" />
                  Estados
                </Link>
              </li>
              <li>
                <Link to="/politicas">
                  <i className="bx bx-right-arrow-alt" />
                  Politicas
                </Link>
              </li>
              <li>
                <Link to="/planes">
                  <i className="bx bx-right-arrow-alt" />
                  Planes
                </Link>
              </li>
              <li>
                <Link to="/moderador">
                  <i className="bx bx-right-arrow-alt" />
                  Moderador
                </Link>
              </li>
              <li>
                <Link to="/administradores">
                  <i className="bx bx-right-arrow-alt" />
                  Administradores
                </Link>
              </li>
              <li>
                <Link to="/usuarios">
                  <i className="bx bx-right-arrow-alt" />
                  Usuarios
                </Link>
              </li>
              <li>
                <Link to="/vendedores">
                  <i className="bx bx-right-arrow-alt" />
                  Vendedores
                </Link>
              </li>
              <li>
                <Link to="/monitoreo">
                  <i className="bx bx-right-arrow-alt" />
                  Monitoreo de actividades
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a type="button" onClick={handleLogout}>
              <div className="parent-icon">
                <i className="bx bx-log-out" />
              </div>
              <div className="menu-title">Cerrar Sesión</div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
