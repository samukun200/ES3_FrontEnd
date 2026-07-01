import './Features.css'

const caracteristicas = [
  {
    id: 1,
    icono: 'bi-shield-check',
    titulo: 'Propiedades verificadas',
    descripcion:
      'Cada propiedad publicada pasa por un proceso de verificación documental antes de aparecer en la plataforma.'
  },
  {
    id: 2,
    icono: 'bi-person-badge',
    titulo: 'Asesores certificados',
    descripcion:
      'Contamos con asesores inmobiliarios certificados que te acompañan desde la primera visita hasta la firma.'
  },
  {
    id: 3,
    icono: 'bi-graph-up-arrow',
    titulo: 'Precios en UF actualizados',
    descripcion:
      'Todos los valores se muestran en UF y pesos chilenos, con actualización diaria según el valor oficial.'
  },
  {
    id: 4,
    icono: 'bi-camera',
    titulo: 'Galería de fotos reales',
    descripcion:
      'Fotos tomadas por fotógrafos profesionales para que puedas evaluar cada propiedad antes de visitarla.'
  },
  {
    id: 5,
    icono: 'bi-cash-coin',
    titulo: 'Asesoría de financiamiento',
    descripcion:
      'Te ayudamos a encontrar el crédito hipotecario o subsidio que mejor se adapta a tu situación.'
  },
  {
    id: 6,
    icono: 'bi-geo-alt',
    titulo: 'Cobertura nacional',
    descripcion:
      'Propiedades en las principales comunas de la Región Metropolitana y otras regiones del país.'
  }
]

function Features() {
  return (
    <section className="seccion-features">
      <div className="container">
        <div className="text-center mb-5">
          <p className="etiqueta-seccion mb-2 justify-content-center">Por qué elegirnos</p>
          <h2 className="titulo-seccion">Todo lo que necesitas para encontrar tu propiedad</h2>
        </div>

        <div className="row g-4">
          {caracteristicas.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
              <div className="feature-card">
                <div className="feature-icono">
                  <i className={`bi ${item.icono}`}></i>
                </div>
                <h3 className="feature-titulo">{item.titulo}</h3>
                <p className="feature-descripcion">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
