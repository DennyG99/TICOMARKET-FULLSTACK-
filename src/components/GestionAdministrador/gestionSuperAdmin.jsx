import React from "react";
import './gestionModerador';
import { useEffect } from "react";


export function GestionSuperAdministrador() {
  useEffect(() => {
    // Inicializa DataTables después de que el componente se monta
    $('#example').DataTable();
  }, []);
  return (
    <>
	<div id="superAdminContainer">
  <div className="card" id="superAdminCard">

    <div className="card-body">
    <h6 className="mb-0 text-uppercase">Super administrador - Usuarios Registrados</h6><br />
      <div className="table-responsive">
        <table id="example" className="table table-striped table-bordered" style={{width: '100%'}}>
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
              <td>61</td>
   
            </tr>
           
          </tbody>
 
        </table>
      </div>
    </div>
  </div>
</div>


    </>
  );
}