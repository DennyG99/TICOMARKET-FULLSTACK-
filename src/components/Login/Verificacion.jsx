import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Verificacion = () => {
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();
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
      onSuccess: (data) => {
        console.log("Datos de verificación:", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user));
        navigate("/dashboard");
        window.location.reload();
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    verificacionMutation.mutate();
  };

  return (
    <div className="wrapper">
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
    </div>
  );
};

export default Verificacion;
