import React, { useState, useEffect } from 'react';
import axios from 'axios';


const endpoint = 'http://127.0.0.1:8000/api/admin';

const ResumenUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${endpoint}/estado-usuarios`);
                setUsuarios(response.data);
                // Inicializar DataTable después de obtener los datos
            } catch (error) {
                console.error('Error al obtener usuarios:', error.message);
            }
        };

        fetchData();
    }, []); // El segundo parámetro [] indica que el efecto solo se ejecutará una vez al montar el componente
    return (
        <div>
            <table id="mytable" className="table table-striped table-bordered" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.Nombre_Usuario}</td>
                            <td>{usuario.Estado}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ResumenUsuarios;
