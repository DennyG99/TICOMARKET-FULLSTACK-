import React from "react";

export function NuevaPolitica() {
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
                    placeholder="Ingrese el nombre de la política"
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
    </>
  );
}
