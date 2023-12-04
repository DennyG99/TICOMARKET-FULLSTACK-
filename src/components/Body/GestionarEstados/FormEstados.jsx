import React, { useState } from "react";

const FormEstados = ({
  editar,
  actualizar,
  crear,
  limpiar,
  setNombre,
  setId,
  setDescripcion,
  setStatus,
  id,
  nombre,
  status,
  descripcion,
}) => {
  const [nombreError, setNombreError] = useState("");
  const [statusError, setStatusError] = useState("");
  const [descripcionError, setDescripcionError] = useState("");

  const validarNombre = () => {
    if (!nombre.trim()) {
      setNombreError(`El campo "Nombre" es requerido`);
      return false;
    }
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(nombre)) {
      setNombreError(
        `El campo "Nombre" solo puede contener letras y espacios en blanco`
      );
      return false;
    }
    if (nombre.length > 25) {
      setNombreError(`El campo "Nombre" no puede tener mas de 25 caracteres`);
      return false;
    }
    setNombreError("");
    return true;
  };

  const validarStatus = () => {
    if (!status.trim()) {
      setStatusError(`El campo "Status" es requerido`);
      return false;
    }
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(status)) {
      setStatusError(
        `El campo "Status" solo puede contener letras y espacios en blanco`
      );
      return false;
    }
    if (status.length > 25) {
      setStatusError(`El campo "Status" no puede tener mas de 25 caracteres`);
      return false;
    }
    setStatusError("");
    return true;
  };

  const validarDescripcion = () => {
    if (!descripcion.trim()) {
      setDescripcionError(`El campo "Descripcion" es requerido`);
      return false;
    }
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(descripcion)) {
      setDescripcionError(
        `El campo "Descripcion" solo puede contener letras y espacios en blanco`
      );
      return false;
    }
    if (descripcion.length > 100) {
      setDescripcionError(
        `El campo "Descripcion" no puede tener mas de 100 caracteres`
      );
      return false;
    }
    setDescripcionError("");
    return true;
  };

  const handleActualizar = () => {
    if (validarNombre() && validarStatus() && validarDescripcion()) {
      actualizar();
    }
  };

  const handleCrear = () => {
    if (validarNombre() && validarStatus() && validarDescripcion()) {
      crear();
    }
  };
  return (
    <>
      <div className="card-body">
        <div>
          <h2 className="text-center">
            {editar ? `Editar Estado` : `Crear Estado`}
          </h2>
        </div>
        <form className="row g-3">
          <input
            type="hidden"
            className="form-control"
            id="inputId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite el nombre"
          />
          <div className="col-md-6">
            <label htmlFor="inputLastName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className={`form-control ${nombreError && "is-invalid"}`}
              id="inputLastName"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onBlur={validarNombre}
              placeholder="Digite el nombre"
            />
            {nombreError && (
              <div className="invalid-feedback">{nombreError}</div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputStatus" className="form-label">
              Status
            </label>
            <input
              type="text"
              className={`form-control ${statusError && "is-invalid"}`}
              id="inputStatus"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              onBlur={validarStatus}
              placeholder="Digite el status"
            />
            {statusError && (
              <div className="invalid-feedback">{statusError}</div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Descripción
            </label>
            <textarea
              type="text"
              className={`form-control ${descripcionError && "is-invalid"}`}
              id="inputEmail"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              onBlur={validarDescripcion}
              placeholder="Digite la descripción"
              style={{ resize: "none" }}
            />
            {descripcionError && (
              <div className="invalid-feedback">{descripcionError}</div>
            )}
          </div>
        </form>
      </div>
      <div className="card-footer text-center">
        {editar === true ? (
          <div>
            <button className="btn btn-warning m-2" onClick={handleActualizar}>
              Actualizar
            </button>
            <button className="btn btn-info m-2" onClick={limpiar}>
              Cancelar
            </button>
          </div>
        ) : (
          <button className="btn btn-success" onClick={handleCrear}>
            Registrar
          </button>
        )}
      </div>
    </>
  );
};

export default FormEstados;
