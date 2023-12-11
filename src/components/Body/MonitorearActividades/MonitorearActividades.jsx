import axios from "axios";
import React, { useEffect,useState } from "react";

const endpoint = "http://127.0.0.1:8000/api";

const MonitorearActividades = () => {
  const [bitacoras, setBitacoras] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(()=>{

    const data = async () =>{
      try{
        const token = localStorage.getItem("token");

        if(!token){
          console.log("No se encontro el token")
          return;
        }
        const response = await axios.get(`${endpoint}/bitacora`, {
          headers:{
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.log(response.data)
        setBitacoras(response.data)
        setDataLoaded(true)
      }catch(error){
        console.log("Error al obtener los datos",error.message);
      }
    }
    data();
  },[]);

  useEffect(() => {
    $("#example").DataTable();
  }, [dataLoaded, bitacoras]);

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
                      <th>ID Sesion</th>
                      <th>Correo</th>
                      <th>Rol</th>
                      <th>Fecha de Acceso</th>
                      <th>Fecha de Salida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bitacoras.map((bitacora)=>(
                      <tr key={bitacora.id_sesion}>
                        <td>{bitacora.id_sesion}</td>
                        <td>{bitacora.correo}</td>
                        <td>{bitacora.rol}</td>
                        <td>{bitacora.ingreso}</td>
                        <td>{bitacora.salida}</td>
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
