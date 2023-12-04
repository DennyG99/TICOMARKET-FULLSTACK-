import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./estados.css";
import {
  getEstados,
  crearEstado,
  editarEstados,
  eliminarEstados,
} from "../../../api/estados.api";
import { success } from "../Planes/Alerts.js";
import Tbody from "./Tbody.jsx";
import FormEstados from "./FormEstados.jsx";

const ApartadoEstadosV2 = () => {
  let message = "";
  const [editar, setEditar] = useState(false);
  const [estadoList, setEstadoList] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    if (dataLoaded) {
      $("#example").DataTable();
    }
  }, [dataLoaded, estadoList]);

  useEffect(() => {
    cargarEstados();
  }, []);

  const cargarEstados = async () => {
    try {
      const response = await getEstados();
      setEstadoList(response.data);
      setDataLoaded(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const crear = async () => {
    try {
      success((message = "Estado creado exitosamente"));
      const response = await crearEstado({
        nombre: nombre,
        status: status,
        descripcion: descripcion,
      });
      limpiar();
      console.log(response);
      cargarEstados();
    } catch (error) {
      console.log(error);
    }
  };

  const actualizar = async () => {
    try {
      success((message = "Estado actualizado exitosamente"));
      const response = await editarEstados(id, {
        nombre: nombre,
        status: status,
        descripcion: descripcion,
      });
      limpiar();
      console.log(response);
      cargarEstados();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEliminarEstado = async (id) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción eliminará tu estado permanentemente.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "No, eliminar",
      });
      if (result.isConfirmed) {
        const response = await eliminarEstados(id);
        if (response.status === 200) {
          cargarEstados();
          Swal.fire(
            "Estado eliminado",
            "Tu estado ha sido eliminado correctamente.",
            "success"
          );
        } else {
          console.error("Error al eliminar el estado", response.status);
          Swal.fire(
            "Error",
            "Hubo un error al intentar eliminar el estado.",
            "error"
          );
        }
      }
    } catch (error) {
      console.error("Error al eliminar el estado", error);
      Swal.fire(
        "Error",
        "Hubo un error al intentar eliminar el estado.",
        "error"
      );
    }
  };

  const editarEstado = (val) => {
    setEditar(true);
    setNombre(val.nombre);
    setStatus(val.status);
    setId(val.id);
    setDescripcion(val.descripcion);
  };

  const limpiar = () => {
    setNombre("");
    setDescripcion("");
    setStatus("");
    setId("");
    setEditar(false);
  };

  return (
    <>
      <div className="container-inPage margen">
        <div className="container">
          <h6 className="mb-0 text-uppercase">Gestión Estados</h6>
          <hr />
          <div className="card">
            <FormEstados
              editar={editar}
              actualizar={actualizar}
              limpiar={limpiar}
              crear={crear}
              setNombre={setNombre}
              setId={setId}
              setStatus={setStatus}
              setDescripcion={setDescripcion}
              nombre={nombre}
              id={nombre}
              status={status}
              descripcion={descripcion}
            />
          </div>
        </div>
        <div className="container-inPage2">
          <div className="container">
            <h6 className="mb-0 text-uppercase">Tabla Estados</h6>
            <hr />
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    id="example"
                    className="table table-striped table-bordered"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>status</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <Tbody
                      estadoList={estadoList}
                      editarEstado={editarEstado}
                      handleEliminarEstado={handleEliminarEstado}
                    />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartadoEstadosV2;
