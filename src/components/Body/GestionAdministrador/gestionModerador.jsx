import React from "react";
import { useEffect } from "react";

const GestionModerador = () => {
  useEffect(() => {
    // Inicializa DataTables después de que el componente se monta
    $("#example").DataTable();
  }, []);
  return (
    <>
      <div className="container container-inPage">
        <div id="moderadorContainer">
          <div className="card" id="moderadorCard">
            <div className="card-body">
              <h6 className="mb-0 text-uppercase">
                Moderador - Tiendas Pendientes de Revisión
              </h6>
              <br />

              <div className="table-responsive">
                <table
                  id="example"
                  className="table table-striped table-bordered"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Nombre de la Tienda</th>
                      <th>Vendedor</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td className="text-center">
                        <button className="btn btn-success btn-sm mx-1">
                          Aprobar
                        </button>
                        <button className="btn btn-danger btn-sm mx-1">
                          Rechazar
                        </button>
                      </td>
                    </tr>
                    {/* Agrega más filas según sea necesario */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <ProductosPendientes></ProductosPendientes>
      </div>
    </>
  );
};

function ProductosPendientes() {
  useEffect(() => {
    // Inicializa DataTables después de que el componente se monta
    $("#example2").DataTable();
  }, []);
  return (
    <>
      <div className="container container-inPage2">
        <div id="moderadorContainerP">
          <div className="card" id="moderadorCard">
            <div className="card-body">
              <h6 className="mb-0 text-uppercase">
                Moderador - Productos Pendientes
              </h6>
              <br />

              <div className="table-responsive">
                <table
                  id="example2"
                  className="table table-striped table-bordered"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Imagen</th>
                      <th>Descripción</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td className="text-center">
                        <button className="btn btn-success btn-sm mx-1">
                          Aprobar
                        </button>
                        <button className="btn btn-danger btn-sm mx-1">
                          Rechazar
                        </button>
                      </td>
                    </tr>
                    {/* Agrega más filas según sea necesario */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GestionModerador;
