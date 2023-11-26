import React, { useEffect } from "react";
import "./gestionSuperAdmin.css";

export function GestionSuperAdministrador() {
  useEffect(() => {
    // Inicializa DataTables después de que el componente se monta
    $("#example").DataTable();
  }, []);
  return (
    <>
      <div id="superAdminContainer">
        <div className="card" id="superAdminCard">
          <div className="card-body">
            <h6 className="mb-0 text-uppercase">
              Super administrador - Usuarios Registrados
            </h6>
            <div className="mt-3 ">
              <AgregarUsuario></AgregarUsuario>
            </div>
            <br />

            <div className="table-responsive">
              <table
                id="example"
                className="table table-striped table-bordered"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Nombre de usuario</th>
                    <th>Correo</th>
                    <th>Estado</th>
                    <th>Rol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                  </tr>
                  {/* Agrega más filas según sea necesario */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AgregarUsuario() {
  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Agregar Usuario
        </button>
        <div
          className="modal fade"
          id="myModal"
          tabIndex={-1}
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">
                  Agregar Usuario
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
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Ingrese el nombre"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="email"
                      className="form-control"
                      id="correo"
                      placeholder="Ingrese el correo"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="contrasena"
                      placeholder="Ingrese la contraseña"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rol">Rol</label>
                    <select className="form-control" id="rol">
                      <option>Seleccionar Rol</option>
                      <option>Administrador</option>
                      <option>Usuario</option>
                      {"Agrega más roles según sea necesario"}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="estado">Estado</label>
                    <select className="form-control" id="estado">
                      <option>Seleccionar Estado</option>
                      <option>Activo</option>
                      <option>Inactivo</option>
                      {" Agrega más estados según sea necesario "}
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
                <button type="button" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
