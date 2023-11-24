import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./apartadoEstados.css";

const ApartadoEstadosV2 = () => {
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    // Inicializa DataTables después de que el componente se monta
    $('#example').DataTable();
  }, []); 

  const handleEliminarEstado = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará tu estado permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "No, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para eliminar el estado (puedes agregar tu lógica aquí)
        Swal.fire(
          "Estado eliminado",
          "Tu estado ha sido eliminado correctamente.",
          "success"
        );
      }
    });
  };

  const editarEstado = () => {
    setEditar(true);
  };

  const limpiar = () => {
    setEditar(false);
  };

  return (
    <>
      <div className="container">
        <h6 className="mb-0 text-uppercase">Gestión Estados</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <div>
              <h2 className="text-center">{editar ? `Editar Estado` : `Crear Estado`}</h2>
            </div>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputFirstName" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="Digite el ID"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputLastName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Digite el nombre"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail" className="form-label">
                  Descripción
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Digite la descripción"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">
                  Estado
                </label>
                <select
                  id="inputState"
                  className="form-select"
                  defaultValue="Choose..."
                >
                  <option disabled>Choose...</option>
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
            </form>
          </div>
          <div className="card-footer text-center">
            {editar === true ? (
              <div>
                <button className="btn btn-warning m-2">Actualizar</button>{" "}
                <button className="btn btn-info m-2" onClick={limpiar}>
                  Cancelar
                </button>
              </div>
            ) : (
              <button className="btn btn-success">Registrar</button>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <h6 className="mb-0 text-uppercase">Tabla Estados</h6>
        <hr />
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table
                id="example"
                className="table table-striped table-bordered"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101010</td>
                    <td>Prueba 1</td>
                    <td>Descripcion prueba 1</td>
                    <td>Activo</td>
                    <td>
                      <button
                        id="btnEditar"
                        className="btn btn-info m-2"
                        onClick={() => {
                          editarEstado();
                        }}
                      >
                        <i className="fa fa-pen"></i>
                      </button>
                      <button
                        id="btnEliminar"
                        className="btn btn-danger"
                        onClick={handleEliminarEstado}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>202020</td>
                    <td>Prueba 2</td>
                    <td>Descripcion prueba 2</td>
                    <td>Inactivo</td>
                    <td>
                      <button id="btnEditar" className="btn btn-info m-2">
                        <i className="fa fa-pen"></i>
                      </button>
                      <button
                        id="btnEliminar"
                        className="btn btn-danger"
                        onClick={handleEliminarEstado}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>303030</td>
                    <td>Prueba 3</td>
                    <td>Descripcion prueba 3</td>
                    <td>Inactivo</td>
                    <td>
                      <button id="btnEditar" className="btn btn-info m-2">
                        <i className="fa fa-pen"></i>
                      </button>
                      <button
                        id="btnEliminar"
                        className="btn btn-danger"
                        onClick={handleEliminarEstado}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartadoEstadosV2;
