import React, { useEffect, useState } from "react";
import { EditarUsuario } from "./EditarUsuario.jsx";
import axios from "axios";
import Swal from "sweetalert2";

const CardUsuario = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const endpoint = "http://127.0.0.1:8000/api";
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${endpoint}/usuario`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }) // Corregir el uso de template string
      .then((response) => {
        setUsuario(response.data);
        setDataLoaded(true);
        console.log(usuario);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      $("#example").DataTable();
    }
  }, [dataLoaded, usuario]);

  const actualizarUsuarios = () => {
    axios
      .get(`${endpoint}/usuario`) // Corregir el uso de template string
      .then((response) => {
        $("#example").DataTable().destroy();
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuario:", error);
      });
  };

  const borrarUsuario = (id) => {
    Swal.fire({
      title: "¿Desea eliminar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Se ha borrado el usuario.",
          icon: "success",
        });
        axios
          .delete(`${endpoint}/usuario/eliminar/${id}`) // Corregir el uso de template string
          .then((response) => {
            actualizarUsuarios();
            console.log("Datos borrados");
          })
          .catch((error) => {
            console.error("Error al obtener usuarios:", error);
          });
      }
    });
  };

  return (
    <div className="container-inPage">
      <div id="superAdminContainer" className="container">
        <div className="card" id="superAdminCard">
          <div className="card-body">
            <h3 className="mb-0 text-uppercase">Gestión de Usuarios</h3>
            <div className="mt-3 "></div>
            <br />
            <div className="table-responsive">
              <table
                id="example"
                className="table table-striped table-bordered"
                style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Apellido Uno</th>
                    <th>Apellido Dos</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Telefono</th>
                    <th>ID</th>
                  </tr>
                </thead>
                <tbody>
                  {usuario.map((Usuario) => (
                    <tr key={Usuario.id}>
                      <td>{Usuario.cedula}</td>
                      <td>{Usuario.nombre}</td>
                      <td>{Usuario.apellidoUno}</td>
                      <td>{Usuario.apellidoDos}</td>
                      <td>{Usuario.correo}</td>
                      <td>{Usuario.idRol}</td>
                      <td>{Usuario.idEstado}</td>
                      <td>{Usuario.telefono}</td>
                      <td>
                        <EditarUsuario
                          cedula={Usuario.cedula}
                          nombre={Usuario.nombre}
                          apellidoUno={Usuario.apellidoUno}
                          apellidoDos={Usuario.apellidoDos}
                          correo={Usuario.correo}
                          idRol={Usuario.idRol}
                          idEstado={Usuario.idEstado}
                          telefono={Usuario.telefono}
                          id={Usuario.id}
                          actualizarUsuarios={actualizarUsuarios}
                        ></EditarUsuario>
                        <button
                          className="btn btn-danger btn-sm m-1"
                          onClick={() => {
                            borrarUsuario(Usuario.id);
                          }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUsuario;
