import './TarjetaPropiedad.css'

function formatearPrecio(valor) {
  return valor.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  })
}

function TarjetaPropiedad({ propiedad, alAbrirGaleria }) {
  const etiquetaPrecio =
    propiedad.operacion === 'arriendo'
      ? `${formatearPrecio(propiedad.precio)} / mes`
      : formatearPrecio(propiedad.precio)

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <article className="tarjeta-propiedad">

        <div
          className="tarjeta-imagen-wrap"
          onClick={() => alAbrirGaleria(propiedad)}
          role="button"
          aria-label={`Ver galería de ${propiedad.titulo}`}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && alAbrirGaleria(propiedad)}
        >
          <img
            src={propiedad.imagenes[0]}
            alt={`Fachada de ${propiedad.titulo}`}
            loading="lazy"
          />
          <span className="tarjeta-etiqueta-operacion">
            {propiedad.operacion === 'venta' ? 'Venta' : 'Arriendo'}
          </span>
          <span className="tarjeta-contador-fotos">
            <i className="bi bi-images"></i>
            {propiedad.imagenes.length}
          </span>
        </div>

        <div className="tarjeta-cuerpo">
          <p className="tarjeta-uf">UF {propiedad.uf.toLocaleString('es-CL')}</p>
          <p className="tarjeta-precio">{etiquetaPrecio}</p>
          <h3 className="tarjeta-titulo" title={propiedad.titulo}>
            {propiedad.titulo}
          </h3>
          <p className="tarjeta-ubicacion">
            <i className="bi bi-geo-alt me-1"></i>
            {propiedad.comuna}, {propiedad.region}
          </p>

          <div className="tarjeta-caracteristicas">
            <span><i className="bi bi-door-closed"></i> {propiedad.dormitorios} dorm.</span>
            <span><i className="bi bi-droplet"></i> {propiedad.banos} baños</span>
            <span><i className="bi bi-arrows-angle-expand"></i> {propiedad.superficie} m²</span>
          </div>

          <button
            type="button"
            className="btn btn-borde btn-sm w-100"
            onClick={() => alAbrirGaleria(propiedad)}
          >
            Ver galería y detalle
          </button>
        </div>

      </article>
    </div>
  )
}

export default TarjetaPropiedad
