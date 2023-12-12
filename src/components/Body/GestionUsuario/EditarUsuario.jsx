import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api";

export function EditarUsuario(props) {
    const [roles, setRoles] = useState([]);
    const [estado, setEstado] = useState([]);
  
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
      // Realizar la solicitud GET al endpoint
      axios
        .get(`http://localhost:8000/api/roles`)
        .then((response) => {
          // Manejar la respuesta exitosa
          setRoles(response.data);
          //console.log(roles);
        })
        .catch((error) => {
          // Manejar errores
          console.error("Error al obtener usuarios:", error);
        });
    }, []);
  
  const [formData, setFormData] = useState({
    id: props.id,
    cedula: props.cedula,
    nombre: props.nombre,
    apellidoUno: props.apellidoUno,
    apellidoDos: props.apellidoDos,
    correo: props.correo,
    contrasena: props.contrasena,
    idRol: props.idRol,
    idEstado: props.idEstado,
    telefono: props.telefono,
    codigoVerificacion: props.codigoVerificacion,
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const editarUsuario = () => {
    axios
      .put(`${endpoint}/usuario/editar/${formData.id}`, formData)
      .then((response) => {
        props.actualizarUsuarios(); // Asegúrate de tener esta función en el componente padre
        Swal.fire({
          icon: "success",
          title: "Datos editados correctamente",
        });
      })
      .catch((error) => {
        console.error("Error al editar usuario:", error);
      });
  };

  const handleSaveClick = () => {
    // Puedes agregar validaciones aquí si es necesario antes de editar
    editarUsuario();
  };

  return (
    <>
      <button
        className="btn btn-success btn-sm m-1"
        data-bs-toggle="modal"
        data-bs-target={"#editarUsuario" + props.id}
      >
        Editar
      </button>

      <div
        className="modal fade"
        id={"editarUsuario" + props.id}
        tabIndex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                Editar Usuario
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
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ingrese el nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellidoUno">Apellido Uno</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidoUno"
                    value={formData.apellidoUno}
                    onChange={handleInputChange}
                    placeholder="Ingrese el primer apellido"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellidoDos">Apellido Dos</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellidoDos"
                    value={formData.apellidoDos}
                    onChange={handleInputChange}
                    placeholder="Ingrese el segundo apellido"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cedula">Cédula</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cedula"
                    value={formData.cedula}
                    onChange={handleInputChange}
                    placeholder="Ingrese la cédula"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="correo">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    placeholder="Ingrese el correo electrónico"
                  />
                </div>
                <div className="form-group">
                      <label htmlFor="rol">Rol</label>
                      <select
                        className="form-control"
                        id="idRol"
                        value={formData.idRol}
                        onChange={handleInputChange}
                        required
                      >
                        <option>Seleccionar Rol</option>
                        {roles.map((rol) => (
                          <option key={rol.id} value={rol.id} >{rol.nombre}</option>
                        ))}
                      </select>
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
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="Ingrese el teléfono"
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
