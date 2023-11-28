import React, { useEffect } from "react";
import Swal from "sweetalert2";

const GestionUsuario = () => {
  useEffect(() => {
    $("#example").DataTable();
  }, []);

  const handleEliminarUsuario = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará al usuario permanentemente.",
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
          "Usuario eliminado",
          "El usuario ha sido eliminado correctamente.",
          "success"
        );
      }
    });
  };

  return (
    <>
      <div className="container container-inPage">
        <h6 className="mb-0 text-uppercase">Tabla Usuarios</h6>
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
                    <th>#</th>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Contreaseña</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Fecha de acceso</th>
                    <th>Tiempo Inactividad</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>0001</td>
                    <td>Jose</td>
                    <td>jose@gmail.com</td>
                    <td>1111</td>
                    <td>Vendedor</td>
                    <td>Activo</td>
                    <td>30/10/2023</td>
                    <td>0</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info m-2"
                        data-toggle="modal"
                        data-target="#editarUsuarioModal"
                      >
                        <i className="bx bxs-pencil" />
                      </button>
                      <button
                        id="btnEliminar"
                        className="btn btn-danger"
                        onClick={handleEliminarUsuario}
                      >
                        <i className="bx bxs-trash" />
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

export default GestionUsuario;
