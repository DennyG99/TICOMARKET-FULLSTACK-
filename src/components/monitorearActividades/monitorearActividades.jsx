import React from 'react'
import './estilo.css'

function monitorearActividades() {
  return (
    <div>
  <div className="container mt-4" id="hc">
    <div className="input-group">
      <input type="text" className="form-control col col-md-6" id="search-input" placeholder="Buscar..." />
      <button className="btn btn-primary" type="submit" id="search-button">Buscar</button>
    </div>
  </div>
  <main className="container">
    <section className="monitoreo mt-4">
      <h2><i className="fas fa-history" /> Bitácora de Acceso </h2>
      {/* Tabla más grande y con datos estáticos */}
      <div className="table-responsive">
        <table id="bitacoraTable" className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th id="th1" style={{backgroundColor: '#1f5cb8'}}> <i className="fas fa-user" /> ID Usuario</th>
              <th id="th2" style={{backgroundColor: '#1f5cb8'}}><i className="fas fa-clock" /> Fecha y Hora de Acceso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="usr1">1</td>
              <td id="th3">2023-01-01 12:00 PM</td>
            </tr>
            <tr>
              <td id="usr2">2</td>
              <td id="th4">2023-01-02 02:30 PM</td>
            </tr>
            {/* Puedes agregar más filas según sea necesario */}
          </tbody>
        </table>
      </div>
    </section>
  </main>
  <footer className="bg-secondary text-white">
    <div className="container text-center">
      {/* Información de pie de página si es necesario */}
    </div>
  </footer>
</div>
  )
}
