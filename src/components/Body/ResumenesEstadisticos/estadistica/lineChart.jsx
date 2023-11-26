import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const endpoint = "http://127.0.0.1:8000/api/admin";

const LineChart = () => {
  const [ingresos, setIngresos] = useState([]);
  const [meses, setMeses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${endpoint}/ingresos-por-anuncios`);
        const datos = response.data;

        const nuevosIngresos = datos.map((ingreso) => ingreso.ingresoTotal);
        const nuevosMeses = datos.map((ingreso) => ingreso.mes);

        setIngresos(nuevosIngresos);
        setMeses(nuevosMeses);
      } catch (error) {
        console.error("Error al obtener los datos:", error.message);
      }
    };
    fetchData();
  }, []);

  var options = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: "blue" },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  var data = {
    labels: meses,
    datasets: [
      {
        label: "Ingresos",
        data: ingresos,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
