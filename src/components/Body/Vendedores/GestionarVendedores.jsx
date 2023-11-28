import React, { useEffect } from "react";
import EditarVendedor from "./EditarVendedor";

const GestionarVendedores = () => {
  useEffect(() => {
    $("#example").DataTable();
  }, []);

  return (
    <>
      <div className="container-inPage">
        <div id="superAdminContainer" className="container">
          <div className="card" id="superAdminCard">
            <div className="card-body">
              <h3 className="mb-0 text-uppercase">Gestion de Vendedores</h3>

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
                      <th>Correo</th>
                      <th>Contraseña</th>
                      <th>Rol</th>
                      <th>Estado</th>
                      <th>Telefono</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Derek</td>
                      <td>Thompson</td>
                      <td>Martinez</td>
                      <td>derek.thompson@ucr.ac.cr</td>
                      <td> BunghaZzz</td>
                      <td>1</td>
                      <td>1</td>
                      <td> 71748196</td>
                      <td>
                        <EditarVendedor></EditarVendedor>
                        <button className="btn btn-danger btn-sm m-1">
                          Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Francisco</td>
                      <td>Lopez</td>
                      <td>Benavides</td>
                      <td>fran.lopez@ucr.ac.cr</td>
                      <td> FranLopez</td>
                      <td>1</td>
                      <td>1</td>
                      <td> 81923819</td>
                      <td>
                        <EditarVendedor></EditarVendedor>
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
      </div>
    </>
  );
};

export default GestionarVendedores;
