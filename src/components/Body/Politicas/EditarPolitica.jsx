import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api";

export function EditarPolitica(props) {

  const [estado, setEstado] = useState([]);
  const [formData, setFormData] = useState({
    nombre: props.nombre,
    descripcion: props.descripcion,
    idEstado: props.estado,
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  useEffect(() => {
    axios
      .get(`${endpoint}/estado`, {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },)
      .then((response) => {
        setEstado(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const editarPolitica = (id) => {
    axios
      .put(`${endpoint}/politicas/editar/${id}`, formData, {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },)
      .then((response) => {
        props.actualizarPoliticas();
        Swal.fire({
          icon: "success",
          title: "Datos agregados Correctamente",
        });
      })

      .catch((e) => {
        console.log(e);
        alert(e);
      });
  };

  const handleSaveClick = () => {
    if (
      formData.nombre &&
      formData.descripcion &&
      formData.idEstado !== "Seleccionar Estado"
    ) {
      console.log("Datos del formulario:", formData);
      editarPolitica(props.id);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Existen campos vacíos",
      });
    }
  };

  return (
    <>
      <button
        className="btn btn-success btn-sm m-1"
        data-bs-toggle="modal"
        data-bs-target={"#editarPolitica" + props.id}
      >
        Editar
      </button>

      <div
        className="modal fade"
        id={"editarPolitica" + props.id}
        tabIndex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                Editar Política
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
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                    type="email"
                    className="form-control"
                    id="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    placeholder="Ingrese la descripción"
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
                    {estado.map((estado) => (
                      <option key={estado.id} value={estado.id}>
                        {estado.nombre}
                      </option>
                    ))}
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
