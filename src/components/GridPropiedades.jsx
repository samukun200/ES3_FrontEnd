import TarjetaPropiedad from './TarjetaPropiedad.jsx'
import './GridPropiedades.css'

function GridPropiedades({ propiedades, alAbrirGaleria }) {
  if (propiedades.length === 0) {
    return (
      <div className="grid-vacio">
        <i className="bi bi-house-x icono-vacio"></i>
        <p className="fs-5 mb-1">No encontramos propiedades con esos filtros.</p>
        <p className="small">Prueba ampliando el precio máximo o cambiando la comuna.</p>
      </div>
    )
  }

  return (
    <section className="seccion-grid" id="propiedades">
      <div className="container">
        <div className="row g-4">
          {propiedades.map((propiedad) => (
            <TarjetaPropiedad
              key={propiedad.id}
              propiedad={propiedad}
              alAbrirGaleria={alAbrirGaleria}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GridPropiedades
