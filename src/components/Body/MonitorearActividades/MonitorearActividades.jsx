import axios from "axios";
import React, { useEffect,useState } from "react";

const endpoint = "http://127.0.0.1:8000/api";

const MonitorearActividades = () => {
  const [usuarios, setUsuario] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(()=>{
    axios
    .get(`${endpoint}/bitacora`)
    .then((response)=>{
      setUsuario(response.data)
      setDataLoaded(true)
    })
    .catch((error)=>{
      console.log("No se han obtenido correctamente los datos",error)
    })
  },[]);

  useEffect(() => {
    $("#example").DataTable();
  }, [dataLoaded, usuarios]);

  useEffect(() => {
    $("#example").DataTable().destroy();
  }, []);

  return (
    <>
      <div className="container-inPage" style={{marginTop: "1%"}}>
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
                      <th>Correo</th>
                      <th>Rol</th>
                      <th>Fecha de Acceso</th>
                      <th>Fecha de Salida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map((usuario)=>(
                      <tr key={usuario.id}>
                        <td>{usuario.correo}</td>
                        <td>{usuario.rol}</td>
                        <td>{usuario.ingreso}</td>
                        <td>{usuario.salida}</td>
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

export default MonitorearActividades;
