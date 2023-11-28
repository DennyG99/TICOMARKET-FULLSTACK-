import React, { useEffect, useState } from "react";
import { NuevoPlan } from "./NuevoPlan";
import { EditarPlan } from "./EditarPlan";
import axios from "axios";
import { success, confirm } from "./Alerts";

const endpoint = "http://127.0.0.1:8000/api";

const CardPlanes = () => {
  const [planes, setPlanes] = useState([]);
  const [estados, setEstados] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [planId, setPlanId] = useState(null);
  let message = "";

  useEffect(() => {
    axios
      .get(`${endpoint}/planes`)
      .then((response) => {
        setPlanes(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de planes:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${endpoint}/estado`)
      .then((response) => {
        setEstados(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de estados:", error);
      });
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      $("#example").DataTable();
    }
  }, [dataLoaded, planes]);

  const actualizarPlanes = () => {
    axios
      .get(`${endpoint}/planes`)
      .then((response) => {
        $("#example").DataTable().destroy();
        setPlanes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de planes:", error);
      });
  };

  const eliminarPlan = (idPlan) => {
    confirm().then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${endpoint}/planes/eliminar/${idPlan}`)
          .then((response) => {
            success((message = "Plan eliminado exitosamente"));
            actualizarPlanes();
          })
          .catch((error) => {
            console.error("Error al eliminar el plan:", error);
          });
      }
    });
  };

  const obtenerNombreEstado = (idEstado) => {
    const estadoEncontrado = estados.find((e) => e.id === idEstado);
    return estadoEncontrado ? estadoEncontrado.nombre : "Estado no encontrado";
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
              <h3 className="mb-0 text-uppercase">Gestión de planes</h3>
              <div className="mt-3">
                <NuevoPlan
                  actualizarPlanes={actualizarPlanes}
                  estados={estados}
                />
              </div>
              <br />
              <div className="table-responsive">
                <table
                  id="example"
                  className="table table-striped table-bordered"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Nombre del plan</th>
                      <th>Descripción</th>
                      <th>Tipo de plan</th>
                      <th>Precio</th>
                      <th>Estado del plan</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planes.map((plan) => (
                      <tr key={plan.idPlan}>
                        <td>{plan.nombre}</td>
                        <td>{plan.descripcion}</td>
                        <td>{plan.tipoPlan}</td>
                        <td>{plan.precio}</td>
                        <td>{obtenerNombreEstado(plan.idEstado)}</td>
                        <td>
                          <EditarPlan
                            handleEditarClick={handleEditarClick}
                            planId={plan.idPlan}
                            actualizarPlanes={actualizarPlanes}
                            planData={plan}
                          />
                          <button
                            className="btn btn-danger btn-sm m-1"
                            onClick={() => eliminarPlan(plan.idPlan)}
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

export default CardPlanes;
