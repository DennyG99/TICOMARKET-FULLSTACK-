import React from "react";

export function GestionModerador() {
  return (
    <>
<div>
  {/* <link rel="stylesheet" href="diseñoAdmin.css" /> */}
  <link rel="stylesheet" href="/css/plugins/administrarPermisos.css" />
  <div className="container mt-5">
    {/* Encabezado principal común para todas las secciones de roles */}
    <div className="card mb-4">
      <div className="card-header">
        <h1 className="mb-0 text-center">Gestión de Usuarios y Permisos</h1>
      </div>
    </div>
    {/* Sección para el rol Moderador */}
    <div className="container mt-5">
      {/* Sección de Moderador */}
      <div className="card mb-4">
        <div className="card-header">
          <h2>Moderador</h2>
        </div>
        <div className="card-body">
          <p>Revisión manual de tiendas y productos.</p>
          {/* Tiendas Pendientes de Revisión */}
          <h3>Tiendas Pendientes de Revisión</h3>
          {/* Tabla para dispositivos grandes y medianos */}
          <div className="table-responsive d-none d-md-block">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre de la Tienda</th>
                  <th>Vendedor</th>
                  <th>Estado</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Ejemplo de fila de tienda, repetir para cada tienda */}
                <tr>
                  <td>Tienda de Electrónica XYZ</td>
                  <td>Juan Pérez</td>
                  <td>Pendiente</td>
                  <td className="text-center">
                    {/* Botones para aprobar o rechazar tienda */}
                    <button className="btn btn-success btn-sm mx-1">
                      Aprobar
                    </button>
                    <button className="btn btn-danger btn-sm mx-1">
                      Rechazar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1}>&lt;</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                  <a className="page-link" href="#">&gt;</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Vista de tarjetas para dispositivos pequeños */}
          <div className="d-md-none">
            {/* Tarjeta individual de tienda, repetir para cada tienda */}
            <div className="card mb-2">
              <div className="card-body">
                <h4 className="h6">Tienda: Tienda de Electrónica XYZ</h4>
                <p>Vendedor: Juan Pérez</p>
                <p>Estado: Pendiente</p>
                {/* Botones para aprobar o rechazar tienda */}
                <button className="btn btn-success btn-sm">Aprobar</button>
                <button className="btn btn-danger btn-sm">Rechazar</button>
              </div>
            </div>
          </div>
          {/* Productos Pendientes de Revisión */}
          <h3>Productos Pendientes de Revisión</h3>
          {/* Tabla para dispositivos grandes y medianos */}
          <div className="table-responsive d-none d-md-block">
            <table className="table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Imagen</th>
                  <th>Descripción</th>
                  <th className="text-center">Acciones</th>
                  {/* Agregada clase para centrar */}
                </tr>
              </thead>
              <tbody>
                {/* Ejemplo de fila de producto, repetir para cada producto */}
                <tr>
                  <td>Laptop Modelo X</td>
                  <td>$1500</td>
                  <td className="text-center">
                    {/* Clase para centrar la imagen */}
                    <img src="imagen_laptop.jpg" alt="Laptop Modelo X" style={{width: 100}} />
                  </td>
                  <td>
                    Última generación de procesador y gráficos avanzados.
                  </td>
                  <td>
                    {/* Contenedor flex para los botones */}
                    <div className="d-flex justify-content-center">
                      {/* Botones para aprobar o rechazar producto */}
                      <button className="btn btn-success btn-sm mr-2">
                        Aprobar
                      </button>
                      {/* Agregado margen a la derecha */}
                      <button className="btn btn-danger btn-sm">Rechazar</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Vista de tarjetas para dispositivos pequeños */}
          <div className="d-md-none">
            {/* Tarjeta individual de producto, repetir para cada producto */}
            <div className="card mb-2">
              <div className="card-body">
                <h4 className="h6">Producto: Laptop Modelo X</h4>
                <p>Precio: $1500</p>
                <img src="imagen_laptop.jpg" alt="Laptop Modelo X" style={{width: 100}} />
                <p>Última generación de procesador y gráficos avanzados.</p>
                {/* Botones para aprobar o rechazar producto */}
                <button className="btn btn-success btn-sm">Aprobar</button>
                <button className="btn btn-danger btn-sm">Rechazar</button>
              </div>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>&lt;</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">&gt;</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
}