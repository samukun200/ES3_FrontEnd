import { useState } from 'react'
import './Navbar.css'

function BarraNavegacion({ alBuscar }) {
  const [consulta, setConsulta] = useState('')

  function manejarEnvio(e) {
    e.preventDefault()
    alBuscar(consulta.trim())
  }

  return (
    <nav className="barra-nav navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#inicio">
          Propiedad<span>Chile</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacion"
          aria-controls="menuNavegacion"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavegacion">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <a className="nav-link" href="#propiedades">Comprar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#propiedades">Arrendar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#financiamiento">Financiamiento</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">Contacto</a>
            </li>
          </ul>

          <form className="d-flex" onSubmit={manejarEnvio} style={{ minWidth: '260px' }}>
            <div className="input-group">
              <input
                type="search"
                className="form-control input-busqueda"
                placeholder="Busca por comuna..."
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
              />
              <button className="btn btn-principal btn-buscar" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default BarraNavegacion
