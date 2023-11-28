import React, { useEffect } from "react";

const MonitorearActividades = () => {
  useEffect(() => {
    $("#example").DataTable();
  }, []);
  return (
    <>
      <div className="container-inPage" style={{marginTop: "2%"}}>
        <div id="monitorearAcContainer" className="container">
          <div className="card" id="monitorearAcCard">
            <div className="card-body">
              <h3 className="mb-0 text-uppercase">Bitacora de Accesso</h3>
              <div className="mt-3 ">
              </div>
              <br />
              <div className="table-responsive">
                <table
                  id="example"
                  className="table table-striped table-bordered"
                  style={{ width: "100%"}}
                >
                  <thead>
                    <tr>
                      <th>ID Usuario</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Fecha de Acceso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>18251</td>
                      <td>Tiger</td>
                      <td>Nixon</td>
                      <td>07-12-2022</td>
                    </tr>
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

export default MonitorearActividades;
