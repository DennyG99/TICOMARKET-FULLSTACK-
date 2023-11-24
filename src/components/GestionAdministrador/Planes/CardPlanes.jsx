import React from "react";
import { useEffect } from "react";
import { NuevoPlan } from "./NuevoPlan";
import { EditarPlan } from "./EditarPlan";

export function CardPlanes() {
  
  useEffect(() => {
    $("#example").DataTable();
  }, []);

  return (
    <>
      <>
        <div id="superAdminContainer">
          <div className="card" id="superAdminCard">
            <div className="card-body">
              <h3 className="mb-0 text-uppercase">Gestión de planes</h3>
              <div className="mt-3 ">
                <NuevoPlan></NuevoPlan>
              </div>
              <br/>
              <div className="table-responsive">
                <table
                  id="example"
                  className="table table-striped table-bordered"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Nombre de usuario</th>
                      <th>Correo</th>
                      <th>Estado</th>
                      <th>Rol</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>
                        <EditarPlan></EditarPlan>
                        <button className="btn btn-danger btn-sm m-1">
                          Eliminar
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
    </>
  );
}


