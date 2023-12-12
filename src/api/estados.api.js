import axios from "axios";

export const crearEstado = async (estado) => {
  return await axios.post("http://localhost:8000/api/estado/crear", estado, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getEstados = async (id) => {
  let url = "http://localhost:8000/api/estado";
  if (id !== undefined) {
    url += `/${id}`;
  }
  return await axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const eliminarEstados = async (id) => {
  return await axios.delete(`http://localhost:8000/api/estado/eliminar/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const editarEstados = async (id, nuevoEstado) => {
  return await axios.put(
    `http://localhost:8000/api/estado/editar/${id}`,
    nuevoEstado, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
};
