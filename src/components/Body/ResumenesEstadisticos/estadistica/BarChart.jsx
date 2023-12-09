import { Bar } from "react-chartjs-2";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const endpoint = "http://127.0.0.1:8000/api/admin";

const BarChart = () => {
  const [cantidadVentas, setCantidadVentas] = useState([]);
  const [nombreTienda, setNombreTienda] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No se encontró el token");
          return;
        }
        const response = await axios.get(`${endpoint}/ventas-por-tienda`, {
          headers:{
            Authorization: `Bearer ${token}`,
          },
        });
        const datos = response.data;
  

        const nuevasCantidadVentas = datos.map(
          (cantidadVenta) => cantidadVenta.cantidadVentas
        );
        const nuevosNombreTienda = datos.map(
          (nombreTienda) => nombreTienda.nombreTienda
        );

        // Actualizando el estado con los nuevos datos
        setCantidadVentas(nuevasCantidadVentas);
        setNombreTienda(nuevosNombreTienda);
      } catch (error) {
        console.error("Error al obtener los datos:", error.message);
      }
    };

    fetchData();
  }, []);

  var options = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
      x: {
        ticks: { color: "rgba(0, 220, 195)" },
      },
    },
  };

  var data = {
    labels: nombreTienda,
    datasets: [
      {
        label: "Cantidad de Ventas",
        data: cantidadVentas,
        backgroundColor: "rgba(0, 220, 195, 0.5)",
      },
    ],
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
