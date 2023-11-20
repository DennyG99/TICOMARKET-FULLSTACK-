import React from 'react'
import './gestionAdmin.css'

function GestionRolContable() {
  return (
    <>
<div className="container mt-5">
  {/* Encabezado principal común para todas las secciones de roles */}
  <div className="card mb-4">
    <div className="card-header">
      <h1 className="mb-0 text-center">Gestión de Usuarios y Permisos</h1>
    </div>
  </div>
  {/* Sección para el rol Contable */}
  <div className="container mt-5">
    {/* Sección de Contable para dispositivos grandes y medianos */}
    <div className="card mb-4 d-none d-md-block">
      <div className="card-header">
        <h2>Contable</h2>
      </div>
      <div className="card-body">
        <p>Gestión de planes de pago:</p>
        <div className="mb-3">
          <button className="btn btn-primary" data-toggle="modal" data-target="#createPaymentPlanModal">
            Crear Plan de Pago
          </button>
          {/* El modal para Crear Plan de Pago */}
          <div className="modal fade" id="createPaymentPlanModal" tabIndex={-1} role="dialog" aria-labelledby="createPaymentPlanModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="createPaymentPlanModalLabel">
                    Crear Plan de Pago
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="planName">Nombre del Plan:</label>
                      <input type="text" className="form-control" id="planName" placeholder="Nombre del plan" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="planPrice">Precio:</label>
                      <input type="text" className="form-control" id="planPrice" placeholder="Precio del plan" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="planBenefits">Ventajas:</label>
                      <textarea className="form-control" id="planBenefits" rows={3} placeholder="Descripción de las ventajas" defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Guardar Plan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>Planes de Pago</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre del Plan</th>
                <th>Precio</th>
                <th>Ventajas</th>
                <th>Usuarios del Plan</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plan Básico</td>
                <td>$10/mes</td>
                <td>1 tienda, soporte básico</td>
                <td>150 usuarios</td>
                <td>
                  <button className="btn btn-info btn-sm" data-toggle="modal" data-target="#editPaymentPlanModal">
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {/* El modal para Editar Plan de Pago */}
    <div className="modal fade" id="editPaymentPlanModal" tabIndex={-1} role="dialog" aria-labelledby="editPaymentPlanModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editPaymentPlanModalLabel">
              Editar Plan de Pago
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="editPlanName">Nombre del Plan:</label>
                <input type="text" className="form-control" id="editPlanName" placeholder="Nombre del plan" />
              </div>
              <div className="form-group">
                <label htmlFor="editPlanPrice">Precio:</label>
                <input type="text" className="form-control" id="editPlanPrice" placeholder="Precio del plan" />
              </div>
              <div className="form-group">
                <label htmlFor="editPlanBenefits">Ventajas:</label>
                <textarea className="form-control" id="editPlanBenefits" rows={3} placeholder="Descripción de las ventajas" defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-primary">
                Actualizar Plan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Sección de Contable para dispositivos pequeños */}
    <div className="d-md-none">
      <h2>Contable</h2>
      <p>Gestión de planes de pago.</p>
      <button className="btn btn-primary">Crear Plan de Pago</button>
      <button className="btn btn-secondary">Modificar Plan de Pago</button>
      {/* Contenido de plan de pago individual como tarjeta */}
      <div className="card mb-2">
        <div className="card-body">
          <h4 className="h6">Plan: Plan Básico</h4>
          <p>Precio: $10/mes</p>
          <p>Ventajas: 1 tienda, soporte básico</p>
          <p>Usuarios del Plan: 150</p>
          <button className="btn btn-info btn-sm">Editar</button>
          <button className="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </div>
      {/* Ejemplo estático de otro plan */}
      <div className="card mb-2">
        <div className="card-body">
          <h4 className="h6">Plan: Plan Premium</h4>
          <p>Precio: $30/mes</p>
          <p>Ventajas: 5 tiendas, soporte prioritario</p>
          <p>Usuarios del Plan: 50</p>
          <button className="btn btn-info btn-sm">Editar</button>
          <button className="btn btn-danger btn-sm">Eliminar</button>
        </div>
      </div>
      {/* Repetir para cada plan de pago */}
    </div>
  </div>
</div>
    </>
  )
}

export default GestionRolContable