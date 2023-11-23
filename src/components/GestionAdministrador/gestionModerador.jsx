import React from "react";
import { useEffect } from "react";
import './gestionModerador.css'

export function GestionModerador() {
  
  useEffect(() => {
    // Inicializa DataTables después de que el componente se monta
    $('#example').DataTable();
  }, []);

  return (
    <>
	<div>
  {/*end breadcrumb*/}
  <h6 className="mb-0 text-uppercase">DataTable Example</h6>
  <hr />
  <div className="card">
    <div className="card-body">
      <div className="table-responsive">
        <table id="example" className="table table-striped table-bordered" style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
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