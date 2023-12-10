import { Bar } from "react-chartjs-2";
import axios from 'axios';
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
} from 'chart.js';

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

const endpoint = 'http://127.0.0.1:8000/api/admin';

const BarChartVendedoresCotizados = () => {
    const [nombreVendedor, setNombreVendedor] = useState([]);
    const [cantidadVentas, setCantidadVentas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("No se encontró el token");
                    return;
                }
                const response = await axios.get(`${endpoint}/vendedores-cotizados`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const datos = response.data;

                const nuevasNombreVendedor = datos.map(nombreVendedor => nombreVendedor.nombreVendedor);
                const nuevosCantidadVentas = datos.map(cantidadVentas => cantidadVentas.cantidadVentas);

                // Actualizando el estado con los nuevos datos
                setNombreVendedor(nuevasNombreVendedor);
                setCantidadVentas(nuevosCantidadVentas);
            } catch (error) {
                console.error('Error al obtener los datos:', error.message);
            }
        };

        fetchData();
    }, []);

    var options = {
        responsive: true,
        animation: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                min: 0,
                max: 100
            },
            x: {
                ticks: { color: '#9BD0F5' }
            }
        }
    };

    var data = {
        labels: nombreVendedor,
        datasets: [
            {
                label: 'Cantidad de Ventas',
                data: cantidadVentas,
                borderColor: '#36A2EB',
                backgroundColor: '#9BD0F5',
            }
        ]
    };

    return <Bar data={data} options={options} />;
};

export default BarChartVendedoresCotizados;
