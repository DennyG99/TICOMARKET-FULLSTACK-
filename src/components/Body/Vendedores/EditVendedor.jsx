import React, { useState, useEffect } from "react";
import axios from "axios";
import { success, error } from "./Alerts";


const token =localStorage.getItem('token')

export function EditarVendedoresD({
  handleEditarClick,
  planId,
  actualizarUsuario,
  planData,
}) {
  const endpoint = "http://127.0.0.1:8000/api";
  const [estado, setEstado] = useState([]);
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");



  useEffect(() => {
    axios
      .get(`${endpoint}/estado`,{headers:{Authorization:`Bearer ${token}`}})
      .then((response) => {
        setEstado(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);






  

  useEffect(() => {
    if (planId !== null && planData) {
      setEstadoSeleccionado(planData.idEstado);
    }
  }, [planId, planData]);



  const validarCampos = () => {
    if (
      !estadoSeleccionado 
    ) {
      error((message = "Por favor llene todos los campos"));
      return false;
    }
    return true;
  };



  const handleGuardarClick = () => {
    if (!validarCampos()) {
      return;
    }
    console.log(planId)
    console.log(estadoSeleccionado);
    axios
    
  axios
  .put(
    `http://localhost:8000/api/vendedor/modificar/${planId}`,
    { idEstado: estadoSeleccionado },
    { headers: { Authorization: `Bearer ${token}` } }
  )
  .then((response) => {
    success("Plan editado de forma correcta");

    $("#editarPlan").modal("hide");
    actualizarUsuario();
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
        data-bs-target={"#editarPlan" + planId}
        onClick={() => handleEditarClick(planId)}
      >
        Editar
      </button>
      <div
        className="modal fade"
        id={"editarPlan" + planId}
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
                  <label htmlFor="estado">Estado</label>
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
