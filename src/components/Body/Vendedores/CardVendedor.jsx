import React, { useEffect, useState } from "react";
import axios from "axios";
import { success, confirm } from "./Alerts";
import { EditarVendedoresD } from "./EditVendedor";

const endpoint = "http://127.0.0.1:8000/api";

const token =localStorage.getItem('token')

const CardVendedoresD = () => {
  const [usuarios, setUsuarios]=useState([]);
  const [planes, setPlanes] = useState([]);
  const [estados, setEstados] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [planId, setPlanId] = useState(null);
  let message = "";



  useEffect(() => {
    axios
      .get(`${endpoint}/vendedor/mostrar`,{headers:{Authorization:`Bearer ${token}`}})
      .then((response) => {
        setUsuarios(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de planes:", error);
      });
  }, []);



  useEffect(() => {
    axios
      .get(`${endpoint}/estado`,{headers:{Authorization:`Bearer ${token}`}})
      .then((response) => {
        setEstados(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de estados:", error);
      });
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      $("#example").DataTable();
    }
  }, [dataLoaded, usuarios]);

  const actualizarUsuario = () => {
    axios
      .get(`${endpoint}/vendedor/mostrar`,{headers:{Authorization:`Bearer ${token}`}})
      .then((response) => {
        $("#example").DataTable().destroy();
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  };

   

  const eliminarUsuario = (idUser) => {
    console.log("SOY EL ID USER",idUser);
    confirm().then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`${endpoint}/vendedor/eliminar/${idUser}`,{headers:{Authorization:`Bearer ${token}`}})
          .then((response) => {
            success((message = "Usuario eliminado de forma correcta"));
            actualizarUsuario();
          })
          .catch((error) => {
            console.error("Error al eliminar Usuario:", error);
          });
      }
    });
  };


  const handleEditarClick = (idPlan) => {
    setPlanId(idPlan);
  };

  return (
    <>
      <div className="container-inPage">
        <div id="superAdminContainer" className="container">
          <div className="card" id="superAdminCard">
            <div className="card-body">
              <h3 className="mb-0 text-uppercase">Gestión de vendedores</h3>
              <br />
              <div className="table-responsive">
                <table
                  id="example"
                  className="table table-striped table-bordered"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                    <th>Nombre</th>
                      <th>Primer Apellido</th>
                      <th>Segundo Apellido</th>
                      <th>Telefono</th>
                      <th>Correo</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Accion</th>
                  
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map((user) => (
                      <tr key={user.id}>
                        <td>{user.nombre}</td>
                        <td>{user.apellidoUno}</td>
                        <td>{user.apellidoDos}</td>
                        <td>{user.telefono}</td>
                        <td>{user.correo}</td>
                        <td>{user.rol}</td>
                        <td>{user.estado}</td>
                    
                        <td>
                          <EditarVendedoresD
                            handleEditarClick={handleEditarClick}
                            planId={user.id}
                            actualizarUsuario={actualizarUsuario}
                            planData={user}
                          />
                          <button
                            className="btn btn-danger btn-sm m-1"
                            onClick={() => eliminarUsuario(user.id)}
                          >
                            {" "}
                            Eliminar{" "}
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
    </>
  );
};

export default CardVendedoresD;
