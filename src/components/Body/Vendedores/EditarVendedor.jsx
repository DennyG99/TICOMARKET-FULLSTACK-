import React from "react";

export function EditarVendedor() {
  return (
    <>
      <div>
        <button
          className="btn btn-success btn-sm m-1"
          data-bs-toggle="modal"
          data-bs-target="#editarPlan"
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
                  Editar Vendedor
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
                    <label htmlFor="nombre">Primer Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellido1"
                      placeholder="Ingrese el primer apellido"
                    />
                  </div>

                  <div className="form-group"> 
                    <label htmlFor="nombre">Segundo Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellido2"
                      placeholder="Ingrese el segundo apellido"
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
                    <label htmlFor="nombre">Contraseña</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contraseña"
                      placeholder="Ingrese el contraseña"
                    />
                  </div>
                  <div className="form-group"> 
                    <label htmlFor="nombre">Rol</label>
                    <input
                      type="text"
                      className="form-control"
                      id="rol"
                      placeholder="Ingrese el rol"
                    />
                  </div>

                  <div className="form-group"> 
                    <label htmlFor="nombre">Estado</label>
                    <input
                      type="text"
                      className="form-control"
                      id="estado"
                      placeholder="Ingrese el estado"
                    />
                  </div>

                <div className="form-group"> 
                    <label htmlFor="nombre">Telefono</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefono"
                      placeholder="Ingrese el Telefono"
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
