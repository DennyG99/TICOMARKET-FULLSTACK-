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
        {/*navigation*/}
        <ul className="metismenu" id="menu">
          <li>
            <a href="javascript:;" className="has-arrow">
              <div className="parent-icon">
                <i className="bx bx-home-circle" />
              </div>
              <div className="menu-title">Dashboard</div>
            </a>
            <ul>
              <li>
                <a href="index.html">
                  <i className="bx bx-right-arrow-alt" />
                  Default
                </a>
              </li>
              <li>
                <a href="dashboard-eCommerce.html">
                  <i className="bx bx-right-arrow-alt" />
                  eCommerce
                </a>
              </li>
              <li>
                <a href="dashboard-analytics.html">
                  <i className="bx bx-right-arrow-alt" />
                  Analytics
                </a>
              </li>
              <li>
                <a href="dashboard-digital-marketing.html">
                  <i className="bx bx-right-arrow-alt" />
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="dashboard-human-resources.html">
                  <i className="bx bx-right-arrow-alt" />
                  Human Resources
                </a>
              </li>
            </ul>
          </li>
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

          <li className="menu-label">Pages</li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-lock" />
              </div>
              <div className="menu-title">Authentication</div>
            </a>
            <ul>
              <li>
                <a href="authentication-signin.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Sign In
                </a>
              </li>
              <li>
                <a href="authentication-signup.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="authentication-signin-with-header-footer.html"
                  target="_blank"
                >
                  <i className="bx bx-right-arrow-alt" />
                  Sign In with Header &amp; Footer
                </a>
              </li>
              <li>
                <a
                  href="authentication-signup-with-header-footer.html"
                  target="_blank"
                >
                  <i className="bx bx-right-arrow-alt" />
                  Sign Up with Header &amp; Footer
                </a>
              </li>
              <li>
                <a href="authentication-forgot-password.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Forgot Password
                </a>
              </li>
              <li>
                <a href="authentication-reset-password.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Reset Password
                </a>
              </li>
              <li>
                <a href="authentication-lock-screen.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Lock Screen
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="user-profile.html">
              <div className="parent-icon">
                <i className="bx bx-user-circle" />
              </div>
              <div className="menu-title">User Profile</div>
            </a>
          </li>
          <li>
            <a href="timeline.html">
              <div className="parent-icon">
                <i className="bx bx-video-recording" />
              </div>
              <div className="menu-title">Timeline</div>
            </a>
          </li>
          <li>
            <a className="has-arrow" href="javascript:;">
              <div className="parent-icon">
                <i className="bx bx-error" />
              </div>
              <div className="menu-title">Errors</div>
            </a>
            <ul>
              <li>
                <a href="errors-404-error.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  404 Error
                </a>
              </li>
              <li>
                <a href="errors-500-error.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  500 Error
                </a>
              </li>
              <li>
                <a href="errors-coming-soon.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Coming Soon
                </a>
              </li>
              <li>
                <a href="error-blank-page.html" target="_blank">
                  <i className="bx bx-right-arrow-alt" />
                  Blank Page
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="faq.html">
              <div className="parent-icon">
                <i className="bx bx-help-circle" />
              </div>
              <div className="menu-title">FAQ</div>
            </a>
          </li>
          <li>
            <a href="pricing-table.html">
              <div className="parent-icon">
                <i className="bx bx-diamond" />
              </div>
              <div className="menu-title">Pricing</div>
            </a>
          </li>

          <li className="menu-label">Others</li>
          <li>
            <a
              href="https://themeforest.net/user/codervent"
              target="_blank"
              rel="noreferrer"
            >
              <div className="parent-icon">
                <i className="bx bx-support" />
              </div>
              <div className="menu-title">Support</div>
            </a>
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
