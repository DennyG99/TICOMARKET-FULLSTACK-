import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export function NuevaPolitica(props) {
  
  const endpoint = "http://127.0.0.1:8000/api";
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    idEstado: "Seleccionar Estado",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const ingresarPolitica = () => {
    axios
      .post("http://localhost:8000/api/politicas/crear", formData)
      .then((response) => {
        props.actualizarPoliticas();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSaveClick = () => {
    if (
      formData.nombre &&
      formData.descripcion &&
      formData.idEstado !== "Seleccionar Estado"
    ) {

      setFormData({
        nombre: "",
        descripcion: "",
        idEstado: "Seleccionar Estado",
      });
      ingresarPolitica();
      Swal.fire({
        icon: "success",
        title: "Datos agregados Correctamente",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Existen campos vacios",
      });
    }
  };


  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#nuevaPolitica"
      >
        Agregar Política
      </button>

      <div
        className="modal fade"
        id="nuevaPolitica"
        tabIndex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                Agregar Política
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre de la política</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ingrese el nombre de la política"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="correo">Descripcion</label>
                  <input
                    type="email"
                    className="form-control"
                    id="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    placeholder="Ingrese el correo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="estado">Estado</label>
                  <select
                    className="form-control"
                    id="idEstado"
                    value={formData.idEstado}
                    onChange={handleInputChange}
                    required
                  >
                    <option>Seleccionar Estado</option>
                    <option key={1} value={1}>
                      Activo
                    </option>
                    <option key={2} value={2}>
                      Inactivo
                    </option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveClick}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
