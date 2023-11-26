import React from "react";
import { useEffect } from "react";
import { NuevaPolitica } from "./NuevaPolitica";
import { EditarPolitica } from "./EditarPolitica";

export function CardPoliticas() {
  
  useEffect(() => {
    $("#example").DataTable();
  }, []);

  return (
    <>
      <>
        <div id="superAdminContainer">
          <div className="card" id="superAdminCard">
            <div className="card-body">
              <h3 className="mb-0 text-uppercase">Gestión de políticas</h3>
              <div className="mt-3 ">
                <NuevaPolitica></NuevaPolitica>
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
                        <EditarPolitica></EditarPolitica>
                        <button className="btn btn-warning btn-sm m-1">
                          Inactivar
                        </button>
                        <button className="btn btn-danger btn-sm m-1">
                          Bloquear
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


