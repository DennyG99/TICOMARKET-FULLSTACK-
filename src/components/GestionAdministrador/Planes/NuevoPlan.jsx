import React from "react";

export function NuevoPlan() {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#nuevoPlan"
      >
        Agregar Plan
      </button>

      <div
        class="modal fade"
        id="nuevoPlan"
        tabindex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myModalLabel">
                Agregar Plan
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
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
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" class="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
