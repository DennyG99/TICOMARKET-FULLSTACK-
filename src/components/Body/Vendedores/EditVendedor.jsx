import React, { useState, useEffect } from "react";
import axios from "axios";
import { success, error } from "./Alerts";

export function EditarVendedoresD({
  handleEditarClick,
  planId,
  actualizarUsuario,
  planData,
}) {
  const endpoint = "http://127.0.0.1:8000/api";

  const [nombre, setNombre] = useState("");
  const [apellidoUno, setApellidoUno] = useState("");

  const [apellidoDos, setApellidoDos] = useState("");
  const [correo, setCorreo] = useState("");
  const [estado, setEstado] = useState([]);
  const [rol,setRol]=useState([]);
  const [rolSeleccionado,setRolSeleccionado]=useState("");
  const [estadoSeleccionado, setEstadoSeleccionado] = useState("");
  const [telefono, setTelefono] = useState("");
  let message = "";

  useEffect(() => {
    axios
      .get(`${endpoint}/estado`)
      .then((response) => {
        setEstado(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${endpoint}/roles`)
      .then((response) => {
        setRol(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);




  

  useEffect(() => {
    if (planId !== null && planData) {
      setNombre(planData.nombre);
      setApellidoUno(planData.apellidoUno);
      setApellidoDos(planData.apellidoDos);
      setCorreo(planData.correo);
      setEstadoSeleccionado(planData.idEstado);
      setRolSeleccionado(planData.idRol);
      setTelefono(planData.telefono);
    }
  }, [planId, planData]);



  const validarCampos = () => {
    if (
      !nombre ||
      !apellidoUno ||
      !apellidoDos ||
      !correo ||
      !rolSeleccionado ||
      !estadoSeleccionado ||
      !telefono
    ) {
      error((message = "Por favor llene todos los campos"));
      return false;
    }
    return true;
  };

  const validarCamposNumericos = () => {
    if (isNaN(parseFloat(telefono)) || !isFinite(telefono)) {
      error(
        (message = "Por favor ingrese un valor numérico válido para el precio")
      );
      return false;
    }
    return true;
  };

  const handleGuardarClick = () => {
    if (!validarCampos()|| !validarCamposNumericos()) {
      return;
    }
    console.log(planId)
    axios
      .put(`${endpoint}/usuario/editar/${planId}`, {
        nombre,
        apellidoUno,
        apellidoDos,
        correo,
        idRol:rolSeleccionado,
        idEstado: estadoSeleccionado,
        telefono
      })
      .then((response) => {
        success((message = "Plan editado de forma correcta"));

        $("#editarPlan").modal("hide");
        actualizarUsuario();

        setNombre("");
        setApellidoUno("");
        setApellidoDos("");
        setCorreo("");
        setEstadoSeleccionado("");
        setTelefono("");
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
                  <label htmlFor="nombre">Nombre del plan</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese el nombre del usuario"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apellidoUno">Primer apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidoUno"
                    placeholder="Ingrese el primer apellido"
                    value={apellidoUno}
                    onChange={(e) => setApellidoUno(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apellidoDos">Segundo Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidoDos"
                    placeholder="Ingrese el segundo apellido"
                    value={apellidoDos}
                    onChange={(e) => setApellidoDos(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="correo">Correo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="correo"
                    placeholder="Ingrese el correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="rol">Rol</label>
                  <select
                    className="form-control"
                    id="rol"
                    value={rolSeleccionado}
                    onChange={(e) => setRolSeleccionado(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecciona un estado
                    </option>
                    {rol.map((rol) => (
                      <option key={rol.id} value={rol.id}>
                        {rol.nombre}
                      </option>
                    ))}
                  </select>
                  </div>

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
                  <div className="form-group">
                  <label htmlFor="telefono">Telefono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    placeholder="Ingrese el correo"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
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
