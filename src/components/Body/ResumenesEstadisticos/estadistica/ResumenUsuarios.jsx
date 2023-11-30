import React, { useState, useEffect } from 'react';
import axios from 'axios';


const endpoint = 'http://127.0.0.1:8000/api/admin';

const ResumenUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${endpoint}/estado-usuarios`);
                setUsuarios(response.data);
                setDataLoaded(true)

            } catch (error) {
                console.error('Error al obtener usuarios:', error.message);
            }
        };

        fetchData();
    }, []); 

    useEffect(() => {
        $("#mytable").DataTable();
      }, [dataLoaded, usuarios]);
    useEffect(() => {
        $("#mytable").DataTable().destroy();
      }, []);
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
