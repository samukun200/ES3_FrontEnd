import './Hero.css'

function Inicio({ totalPropiedades }) {
  return (
    <header className="seccion-inicio" id="inicio">
      <div className="container">
        <p className="etiqueta-seccion mb-3" style={{ color: '#f4a49a' }}>
          Inmobiliaria digital · Chile
        </p>
        <h1>
          Encuentra la propiedad que calza con tu próximo capítulo.
        </h1>
        <p className="subtitulo mt-3 mb-0">
          Más de {totalPropiedades} propiedades disponibles en todo Chile,
          verificadas y listas para visitar.
        </p>

        <div className="estadisticas">
          <div className="estadistica-item">
            <strong>{totalPropiedades}+</strong>
            <span>Propiedades</span>
          </div>
          <div className="estadistica-item">
            <strong>8</strong>
            <span>Comunas</span>
          </div>
          <div className="estadistica-item">
            <strong>2</strong>
            <span>Regiones</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Inicio
