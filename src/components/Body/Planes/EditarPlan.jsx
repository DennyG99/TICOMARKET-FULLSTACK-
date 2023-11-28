// EditarPlan.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { success } from "./Alerts";

export function EditarPlan({
  handleEditarClick,
  planId,
  actualizarPlanes,
  planData,
}) {
  const endpoint = "http://127.0.0.1:8000/api";

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipoPlan, setTipoPlan] = useState("");
  const [precio, setPrecio] = useState("");
  const [estado, setEstado] = useState([]);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
  let message = "";

  useEffect(() => {
    axios
      .get(`${endpoint}/estado`)
      .then((response) => {
        setEstado(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  useEffect(() => {
    if (planId !== null && planData) {
      setNombre(planData.nombre);
      setDescripcion(planData.descripcion);
      setTipoPlan(planData.tipoPlan);
      setPrecio(planData.precio);
      setEstadoSeleccionado(planData.idEstado);
    }
  }, [planId, planData]);

  const handleGuardarClick = () => {
    axios
      .put(`${endpoint}/planes/editar/${planId}`, {
        nombre,
        descripcion,
        tipoPlan,
        precio,
        idEstado: estadoSeleccionado,
      })
      .then((response) => {
       
        success(message= "Plan editado de forma correcta");

        $("#editarPlan").modal("hide");
        actualizarPlanes();

        setNombre("");
        setDescripcion("");
        setTipoPlan("");
        setPrecio("");
        setEstadoSeleccionado("");
      })
      .catch((error) => {
        console.error("Error al actualizar el plan:", error);
      });
  };

  return (
    <>
      <button
        className="btn btn-success btn-sm m-1"
        data-bs-toggle="modal"
        data-bs-target="#editarPlan"
        onClick={() => handleEditarClick(planId)}
      >
        Editar
      </button>
      <div
        className="modal fade"
        id="editarPlan"
        tabIndex={-1}
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                Editar Plan
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre del plan</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese el nombre del plan"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="descripcion">Descripcion del plan</label>
                  <input
                    type="text"
                    className="form-control"
                    id="descripcion"
                    placeholder="Ingrese la descripcion del plan"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tipoPlan">Tipo del plan</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tipoPlan"
                    placeholder="Ingrese el tipo del plan"
                    value={tipoPlan}
                    onChange={(e) => setTipoPlan(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="precioPlan">Precio del plan</label>
                  <input
                    type="text"
                    className="form-control"
                    id="precioPlan"
                    placeholder="Ingrese el tipo del plan"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="estado">Estado del plan</label>
                  <select
                    className="form-control"
                    id="estado"
                    value={estadoSeleccionado}
                    onChange={(e) => setEstadoSeleccionado(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecciona un estado
                    </option>
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
                onClick={handleGuardarClick}
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
