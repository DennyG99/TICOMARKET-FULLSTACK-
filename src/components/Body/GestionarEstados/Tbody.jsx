import React from "react";

const Tbody = ({estadoList, editarEstado, handleEliminarEstado}) => {
  return (
    <tbody>
      {estadoList.map((val) => {
        return (
          <tr key={val.id}>
            <td>{val.id}</td>
            <td>{val.nombre}</td>
            <td>{val.descripcion}</td>
            <td>{val.status}</td>
            <td>
              <button
                id="btnEditar"
                className="btn btn-info m-2"
                onClick={() => {
                  editarEstado(val);
                }}
              >
                <i className="bx bxs-pencil"></i>
              </button>
              <button
                id="btnEliminar"
                className="btn btn-danger"
                onClick={() => handleEliminarEstado(val.id)}
              >
                <i className="bx bx-trash"></i>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
