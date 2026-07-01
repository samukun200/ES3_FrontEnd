import './Footer.css'

function PiePagina() {
  return (
    <footer className="pie-pagina">
      <div className="container">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-4">
            <p className="marca mb-1">
              Propiedad<span>Chile</span>
            </p>
            <p className="mb-0 small">Plataforma de búsqueda y venta de propiedades.</p>
          </div>
          <div className="col-12 col-md-4 text-md-center">
            <nav aria-label="Navegación del pie de página">
              <a href="#inicio" className="me-3">Inicio</a>
              <a href="#propiedades" className="me-3">Propiedades</a>
              <a href="#financiamiento" className="me-3">Financiamiento</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
          <div className="col-12 col-md-4 text-md-end">
            <a href="mailto:contacto@propiedadchile.cl">
              contacto@propiedadchile.cl
            </a>
          </div>
        </div>
        <hr className="separador" />
        <p className="text-center mb-0 small">
          © {new Date().getFullYear()} PropiedadChile. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default PiePagina
