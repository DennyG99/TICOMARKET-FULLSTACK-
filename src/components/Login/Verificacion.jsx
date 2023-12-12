import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Verificacion = () => {
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  const onSuccessHandler = (data) => {
    const { user } = data;
    switch (user.idRol) {
      case 4:
      case 5:
        navigate("/login");
        break;
      default:
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user));
        navigate("/dashboard");
        window.location.reload();
    }
  };

  const verificacionMutation = useMutation(
    async () => {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:8000/api/verificacion",
        {
          codigo,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    {
      onSuccess: onSuccessHandler,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    verificacionMutation.mutate();
  };

  return (
    <div className="wrapper">
      <header className="login-header shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-white rounded fixed-top rounded-0 shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="assets/images/LOGO TM - LITTLE.png"
                width={40}
                height={25}
                alt
              />{" "}
              TICOMARKET
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent1"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i className="bx bx-home-alt me-1" />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bx bx-microphone me-1" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="authentication-forgot d-flex align-items-center justify-content-center">
        <div className="card forgot-box">
          <div className="card-body">
            <div className="p-4 rounded  border">
              <div className="text-center">
                <img
                  src="assets/images/icons/forgot-2.png"
                  width={120}
                  alt="true"
                />
              </div>
              <h4 className="mt-5 font-weight-bold text-center">
                Verificar correo
              </h4>
              <p className="text-muted text-center">
                Ingresa el codigo de verificacion para verificar <br />
                tu identidad y acceder a tu cuenta
              </p>
              <form onSubmit={handleSubmit}>
                <div className="my-4">
                  <label className="form-label">Código de verificación</label>
                  <input
                    type="text"
                    value={codigo}
                    className="form-control form-control-lg"
                    placeholder="Insertar codigo"
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Verificar
                  </button>{" "}
                  <Link
                    to="/login"
                    href="authentication-signin.html"
                    className="btn btn-light btn-lg"
                  >
                    <i className="bx bx-arrow-back me-1" />
                    Volver al login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white shadow-sm border-top p-2 text-center fixed-bottom">
        <p className="mb-0">
          TICOMARKET. Copyright © {new Date().getFullYear()}. All right
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Verificacion;
