import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const endpoint = "http://127.0.0.1:8000/api";

const GestionSuperAdmin = () => {

const [usuario,setUsuario]=useState([]);
const [dataLoaded,setDataLoaded]=useState(false);


  useEffect(() => {
    axios
      .get(`${endpoint}/usuario`)
      .then((response) => {
        setUsuario(response.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de planes:", error);
      });
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      $("#example").DataTable();
    }
  }, [dataLoaded, usuario]);

  const actualizarUsuarios = () => {
    axios
      .get(`${endpoint}/usuario`)
      .then((response) => {
        $("#example").DataTable().destroy();
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de planes:", error);
      });
  };

  return (
    <div className="container container-inPage">
      <div id="superAdminContainer">
        <div className="card" id="superAdminCard">
          <div className="card-body">
            <h6 className="mb-0 text-uppercase">
              Super administrador - Usuarios Registrados
            </h6>
            <div className="mt-3 ">
              <AgregarUsuario
              actualizarUsuarios={actualizarUsuarios}
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
                    <th>Nombre de usuario</th>
                    <th>Correo</th>
                    <th>Estado</th>
                    <th>Rol</th>
                  </tr>
                </thead>
                <tbody>
                {usuario.map((user) => (
                      <tr key={user.nombre}>
                        <td>{user.nombre}</td>
                        <td>{user.correo}</td>
                        <td>{user.estado}</td>
                        <td>{user.rol}</td>

              
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function AgregarUsuario(props) {
  const [roles, setRoles] = useState([]);
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    axios
      .get(`${endpoint}/estado`)
      .then((response) => {
        setEstado(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);
  
  useEffect(() => {
    // Realizar la solicitud GET al endpoint
    axios
      .get(`http://localhost:8000/api/roles`)
      .then((response) => {
        // Manejar la respuesta exitosa
        setRoles(response.data);
        //console.log(roles);
      })
      .catch((error) => {
        // Manejar errores
        console.error("Error al obtener usuarios:", error);
      });
  }, []);

  const [formData, setFormData] = useState({
    nombre: '',
    apellidoUno:'',
    apellidoDos:'',
    correo: '',
    contrasena: '',
    idRol: 'Seleccionar Rol',
    idEstado: 'Seleccionar Estado',
    telefono: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };


  const ingresarUsuario=()=>{
    axios.post('http://localhost:8000/api/usuario/insertar',formData)
    .then((response)=>{
      props.actualizarUsuarios();
   
    }).catch((e)=>{
      console.log(formData);
      alert(e);
    })


  }

  // Manejar clic en el botón "Guardar"
  const handleSaveClick = () => {
    // Validar que todos los campos obligatorios estén llenos
    if (
      formData.nombre &&
      formData.apellidoUno &&
      formData.apellidoDos &&
      formData.correo &&
      formData.contrasena &&
      formData.idRol !== 'Seleccionar Rol' &&
      formData.idEstado !== 'Seleccionar Estado' &&
      formData.telefono
    ) {
      // Aquí puedes usar el objeto formData como lo necesites
      console.log('Datos del formulario:', formData);

      // Puedes realizar acciones adicionales aquí, como enviar los datos a un backend
      // ...\
      

      // Limpiar el formulario después de guardar
      setFormData({
        nombre: '',
        apellidoUno: '',
        apellidoDos: '',
        correo: '',
        contrasena: '',
        idRol: 'Seleccionar Rol',
        idEstado: 'Seleccionar Estado',
        telefono: '',
      });
      ingresarUsuario();
      Swal.fire({
        icon: "success",
        title: "Datos agregados Correctamente",
      });
     
    } else {
      Swal.fire({
        icon: "warning",
        title: "Existen campos vacios",
      });
    }
  };




  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Agregar Usuario
        </button>
        <div
          className="modal fade"
          id="myModal"
          tabIndex={-1}
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">
                  Agregar Usuario
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
              <form>
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Ingrese el nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="apellido1">Primer apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidoUno"
                      placeholder="Ingrese el primer apellido"
                      value={formData.apellidoUno}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="apellido2">Segundo apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidoDos"
                      placeholder="Ingrese el segundo apellido"
                      value={formData.apellidoDos}
                      onChange={handleInputChange}
                      required
                    />
                  </div>



















                  <div className="form-group">
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="email"
                      className="form-control"
                      id="correo"
                      placeholder="Ingrese el correo"
                      value={formData.correo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="contrasena"
                      placeholder="Ingrese la contraseña"
                      value={formData.contrasena}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefono"
                      placeholder="Ingrese su teléfono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rol">Rol</label>
                    <select
                      className="form-control"
                      id="idRol"
                      value={formData.idRol}
                      onChange={handleInputChange}
                      required
                    >
                      <option>Seleccionar Rol</option>
                      {roles.map((rol) => (
                        <option key={rol.id} value={rol.id} >{rol.nombre}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="estado">Estado</label>
                    <select
                      className="form-control"
                      id="idEstado"
                      value={formData.idEstado}
                      onChange={handleInputChange}
                      required
                    >
                      <option>Seleccionar Estado</option>
                      {estado.map((estado) => (
                      <option key={estado.id} value={estado.id}>
                        {estado.nombre}
                      </option>
                    ))}
                    
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
              <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveClick}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GestionSuperAdmin;
