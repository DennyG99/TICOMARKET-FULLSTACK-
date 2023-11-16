import React from "react";
import './gestionAdministrador.css';


export function GestionSuperAdministrador() {
  return (
    <>
<div>
  <div className="container mt-5">
    {/* Encabezado principal común para todas las secciones de roles */}
    <div className="card mb-4">
      <div className="card-header">
        <h1 className="mb-0 text-center">Gestión de Usuarios y Permisos</h1>
      </div>
    </div>
    {/* Sección de SuperAdmin */}
    <div className="container mt-5">
      {/* Sección de Administrador para dispositivos grandes y medianos */}
      <div className="card mb-4">
        <div className="card-header">
          <h2>SuperAdmin</h2>
        </div>
        <div className="card-body">
          <p>Acciones disponibles para el rol de SuperAdmin:</p>
          <div className="mb-3">
            {/* Botón para crear roles */}
            <button className="btn btn-primary" data-toggle="modal" data-target="#createRoleModal">
              Crear Rol
            </button>
            {/* Modal para crear roles */}
            <div className="modal fade" id="createRoleModal" tabIndex={-1} role="dialog" aria-labelledby="createRoleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="createRoleModalLabel">
                      Crear Nuevo Rol
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="roleId">ID:</label>
                        <input type="text" className="form-control" id="roleId" placeholder="Ingrese el ID" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="roleName">Nombre:</label>
                        <input type="text" className="form-control" id="roleName" placeholder="Ingrese el nombre" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="roleDescription">Descripción:</label>
                        <textarea className="form-control" id="roleDescription" rows={3} placeholder="Ingrese la descripción" defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="roleStatus">Estado:</label>
                        <select className="form-control" id="roleStatus">
                          <option value="activo">Activo</option>
                          <option value="inactivo">Inactivo</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Guardar Rol
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Botón para crear usuarios */}
            <button className="btn btn-secondary ml-2" data-toggle="modal" data-target="#createUserModal">
              Crear Usuario
            </button>
            {/* Modal para crear usuarios */}
            <div className="modal fade" id="createUserModal" tabIndex={-1} role="dialog" aria-labelledby="createUserModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="createUserModalLabel">
                      Crear Nuevo Usuario
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      {/* Nombre */}
                      <div className="form-group">
                        <label htmlFor="userName">Nombre:</label>
                        <input type="text" className="form-control" id="userName" placeholder="Ingrese el nombre" />
                      </div>
                      {/* Correo */}
                      <div className="form-group">
                        <label htmlFor="userEmail">Correo:</label>
                        <input type="email" className="form-control" id="userEmail" placeholder="Ingrese el correo electrónico" />
                      </div>
                      {/* Contraseña */}
                      <div className="form-group">
                        <label htmlFor="userPassword">Contraseña:</label>
                        <input type="password" className="form-control" id="userPassword" placeholder="Ingrese una contraseña" />
                      </div>
                      {/* Rol */}
                      <div className="form-group">
                        <label htmlFor="userRole">Rol:</label>
                        <select className="form-control" id="userRole">
                          <option value="vendedor">Vendedor</option>
                          {/* Añadir más roles según sea necesario */}
                        </select>
                      </div>
                      {/* Estado */}
                      <div className="form-group">
                        <label htmlFor="userStatus">Estado:</label>
                        <select className="form-control" id="userStatus">
                          <option value="activo">Activo</option>
                          {/* Añadir más estados si es necesario */}
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Crear Usuario
                      </button>
                    </form>
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
                  </tr>
                </thead>
                <tbody>
                  {/* Ejemplo de un usuario registrado */}
                  <tr>
                    <td>admin1</td>
                    <td>admin1@ejemplo.com</td>
                    <td>Activo</td>
                    <td>SuperAdmin</td>
                  </tr>
                  {/* Repetir para cada usuario registrado */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Sección de SuperAdmin para dispositivos pequeños */}
        <div className="d-md-none">
          <div className="card-header">
            <h2>SuperAdmin</h2>
          </div>
          <div className="card-body">
            <p>Acciones disponibles para el rol de SuperAdmin:</p>
            <button className="btn btn-primary mb-2">Crear Rol</button>
            <button className="btn btn-secondary mb-2">Crear Usuario</button>
            {/* La lista de usuarios podría implementarse aquí como una lista colapsable o acordeón para una mejor experiencia móvil */}
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1}>&lt;</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">&gt;</a>
        </li>
      </ul>
    </nav>
  </div>
</div>

    </>
  );
}