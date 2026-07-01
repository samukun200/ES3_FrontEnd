import './AcordeonFinanciamiento.css'

const opcionesFinanciamiento = [
  {
    id: 'credito-hipotecario',
    titulo: 'Crédito hipotecario tradicional',
    contenido:
      'Financia hasta el 80% del valor de la propiedad a través de un banco o institución financiera, con plazos de 10 a 30 años. Te ayudamos a comparar tasas entre las principales entidades del país antes de firmar cualquier documento.'
  },
  {
    id: 'leasing-habitacional',
    titulo: 'Leasing habitacional',
    contenido:
      'Arriendas la propiedad con opción de compra al término del contrato. Es una alternativa ideal para quienes aún no califican a un crédito hipotecario tradicional o prefieren mayor flexibilidad durante los primeros años.'
  },
  {
    id: 'subsidios-estado',
    titulo: 'Subsidios del Estado (DS19 / DS1)',
    contenido:
      'Si cumples los requisitos de ahorro y tramo socioeconómico, puedes acceder a subsidios habitacionales del Ministerio de Vivienda que reducen el pie necesario para adquirir tu primera propiedad en Chile.'
  },
  {
    id: 'simulacion-dividendo',
    titulo: 'Simulación de dividendo mensual',
    contenido:
      'Nuestro equipo de asesores puede calcular tu dividendo mensual proyectado considerando el pie disponible, la tasa de interés vigente y el plazo deseado, para que sepas exactamente cuánto pagarías antes de comprometerte.'
  }
]

function AcordeonFinanciamiento() {
  return (
    <section className="seccion-financiamiento" id="financiamiento">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-4">
            <p className="etiqueta-seccion mb-2">Financiamiento</p>
            <h2 className="titulo-seccion mb-3">
              Opciones para financiar tu propiedad
            </h2>
            <p className="text-muted">
              Desde créditos hipotecarios hasta subsidios estatales: te explicamos cada alternativa
              para que tomes la mejor decisión.
            </p>
          </div>

          <div className="col-12 col-lg-8">
            <div className="accordion acordeon-financiamiento" id="acordeon-financiamiento">
              {opcionesFinanciamiento.map((opcion, indice) => (
                <div className="accordion-item" key={opcion.id}>
                  <h3 className="accordion-header" id={`encabezado-${opcion.id}`}>
                    <button
                      className={`accordion-button ${indice === 0 ? '' : 'collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#panel-${opcion.id}`}
                      aria-expanded={indice === 0 ? 'true' : 'false'}
                      aria-controls={`panel-${opcion.id}`}
                    >
                      {opcion.titulo}
                    </button>
                  </h3>
                  <div
                    id={`panel-${opcion.id}`}
                    className={`accordion-collapse collapse ${indice === 0 ? 'show' : ''}`}
                    aria-labelledby={`encabezado-${opcion.id}`}
                    data-bs-parent="#acordeon-financiamiento"
                  >
                    <div className="accordion-body">
                      {opcion.contenido}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcordeonFinanciamiento
