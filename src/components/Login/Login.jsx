import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const upDate = new Date().getFullYear();

  const loginMutation = useMutation(
    async () => {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        {
          correo: email,
          contrasena: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        // Guardar el token en localStorage o en el estado global de tu aplicación
        localStorage.setItem("token", data.token);

        // Redirigir a la página de verificación después de 3 segundos

        navigate("/verificacion"); // Utiliza el hook useNavigate
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="wrapper">
      <header className="login-header shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-white rounded fixed-top rounded-0 shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="assets/images/LOGO TM - LITTLE.png" width={40} height={25} alt /> TICOMARKET
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
      <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <div className="col mx-auto">
              <div className="card mt-5 mt-lg-0">
                <div className="card-body">
                  <div className="border p-4 rounded">
                    <div className="text-center">
                      <h3 className>Ingreso Administrativo</h3>
                      <p>
                        Si tienes problemas para iniciar sesión,{" "}
                        <span>
                          <a href="#">contacta a soporte</a>
                        </span>
                      </p>
                    </div>

                    <div className="login-separater text-center mb-4">
                      <br />
                      <hr />
                      <br />
                    </div>
                    <div className="form-body">
                      <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-12">
                          <label
                            htmlFor="inputEmailAddress"
                            className="form-label"
                          >
                            Correo Electrónico
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmailAddress"
                            placeholder="Ingresar correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="inputChoosePassword"
                            className="form-label"
                          >
                            Contraseña
                          </label>
                          <div className="input-group" id="show_hide_password">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="form-control border-end-0"
                              id="inputChoosePassword"
                              value={password}
                              placeholder="Ingresar contraseña"
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <a
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="input-group-text bg-secondary"
                              
                            >
                              {showPassword ? "👁️" : "👁️‍🗨️"}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-6 text-end">
                          <a href="authentication-forgot-password.html">
                            ¿Olvidó su contraseña?
                          </a>
                        </div>
                        <div className="col-12">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                              <i className="bx bxs-lock-open" />
                              Iniciar Sesión
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </div>
      <footer className="bg-white shadow-sm border-top p-2 text-center fixed-bottom">
        <p className="mb-0">Copyright © {upDate}. All right reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
