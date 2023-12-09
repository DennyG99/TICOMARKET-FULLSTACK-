import React from "react";
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const endpoint = 'http://127.0.0.1:8000/api/admin';

const PieChart = () => {

    const [nombreProducto, setNombreProducto] = useState([]);
    const [precio, setPrecio] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("No se encontró el token");
                    return;
                }
                const response = await axios.get(`${endpoint}/productos-mas-vendidos`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const datos = response.data;

                const nuevosNombreProductos = datos.map(nombreProducto => nombreProducto.Nombre_Producto);
                const nuevosPrecios = datos.map(precio => precio.Precio);

                setNombreProducto(nuevosNombreProductos);
                setPrecio(nuevosPrecios);
            } catch (error) {
                console.error('Error al obtener los datos:', error.message);
            }
        };
        fetchData();
    }, []);

    var options = {
        responsive: true,
        maintainsAspectRatio: false,
    };

    var data = {
        labels: nombreProducto,
        datasets: [
            {
                label: 'Popularidad en Navidad',
                data: precio,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return <Pie data={data} options={options} />
}

export default PieChart;