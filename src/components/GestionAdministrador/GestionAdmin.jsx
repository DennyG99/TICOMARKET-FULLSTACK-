import React from 'react'
import './gestionAdmin.css'

function GestionAdministrador() {
  return (
    <>
      <div className="container mt-5">
        {/* Encabezado principal común para todas las secciones de roles */}
        <div className="card mb-4">
          <div className="card-header">
            <h1 className="mb-0 text-center">Gestión de Usuarios y Permisos</h1>
          </div>
        </div>
        {/* Card Administrador */}
        <div className="container mt-5">
          {/* Sección de Administrador para dispositivos grandes y medianos */}
          <div className="card mb-4 d-none d-md-block">
            <div className="card-header">
              <h2>Administrador</h2>
            </div>
            <div className="card-body">
              <p>Acciones disponibles para el rol de Administrador:</p>
              <div className="mb-3">
                {/* Botón para crear políticas */}
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#createPolicyModal"
                >
                  Crear Política
                </button>
                {/* Modal para crear política */}
                <div
                  className="modal fade"
                  id="createPolicyModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="createPolicyModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="createPolicyModalLabel">
                          Crear Nueva Política
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="form-group">
                            <label htmlFor="newPolicyName">
                              Nombre de la Política:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="newPolicyName"
                              placeholder="Introduce el nombre de la nueva política"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="newPolicyDescription">
                              Descripción:
                            </label>
                            <textarea
                              className="form-control"
                              id="newPolicyDescription"
                              rows={3}
                              placeholder="Describe la nueva política"
                              defaultValue={""}
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Guardar Política
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Botón para modificar políticas */}
                <button
                  className="btn btn-secondary ml-2"
                  data-toggle="modal"
                  data-target="#modifyPolicyModal"
                >
                  Modificar Política
                </button>
                {/* Modal para modificar política */}
                <div
                  className="modal fade"
                  id="modifyPolicyModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="modifyPolicyModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="modifyPolicyModalLabel">
                          Modificar Política Existente
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <form>
                          {/* Contenido similar al modal de crear con campos prellenados para edición */}
                          <button type="submit" className="btn btn-primary">
                            Actualizar Política
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3>Usuarios Registrados</h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre de usuario</th>
                      <th>Correo</th>
                      <th>Estado</th>
                      <th>Rol</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>user1</td>
                      <td>user1@ejemplo.com</td>
                      <td>Activo</td>
                      <td>Usuario</td>
                      <td>
                        <button className="btn btn-warning btn-sm">
                          Bloquear
                        </button>
                        <button className="btn btn-secondary btn-sm ml-1">
                          Inactivar
                        </button>
                      </td>
                    </tr>
                    {/* Repetir para cada usuario */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Sección de Administrador para dispositivos pequeños */}
          <div className="d-md-none">
            <h2>Administrador</h2>
            <p>Acciones disponibles para el rol de Administrador.</p>
            <button className="btn btn-primary">Crear Política</button>
            <button className="btn btn-secondary">Modificar Política</button>
            <h3>Usuarios Registrados</h3>
            {/* Contenido de usuario individual como tarjeta */}
            <div className="card mb-2">
              <div className="card-body">
                <h4 className="h6">Nombre de usuario: user1</h4>
                <p>Correo: user1@ejemplo.com</p>
                <p>Estado: Activo</p>
                <p>Rol: Usuario</p>
              </div>
            </div>
            {/* Repetir para cada usuario */}
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1}>
              &lt;
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              &gt;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default GestionAdministrador;