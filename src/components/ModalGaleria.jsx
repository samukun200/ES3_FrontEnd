import { useEffect, useState } from 'react'
import './ModalGaleria.css'

function formatearPrecio(valor) {
  return valor.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  })
}

function ModalGaleria({ propiedad, alCerrar, alContactar }) {
  const [indiceActivo, setIndiceActivo] = useState(0)

  // Reinicia el índice de imagen cada vez que se abre una propiedad distinta
  useEffect(() => {
    setIndiceActivo(0)
  }, [propiedad])

  // Cierra con la tecla Escape
  useEffect(() => {
    function manejarTeclado(e) {
      if (e.key === 'Escape') alCerrar()
    }
    document.addEventListener('keydown', manejarTeclado)
    return () => document.removeEventListener('keydown', manejarTeclado)
  }, [alCerrar])

  if (!propiedad) return null

  const total = propiedad.imagenes.length

  function irAnterior() {
    setIndiceActivo((prev) => (prev - 1 + total) % total)
  }

  function irSiguiente() {
    setIndiceActivo((prev) => (prev + 1) % total)
  }

  const etiquetaPrecio =
    propiedad.operacion === 'arriendo'
      ? `${formatearPrecio(propiedad.precio)} / mes`
      : formatearPrecio(propiedad.precio)

  return (
    <div
      className="fondo-modal"
      onClick={alCerrar}
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-modal"
    >
      <div className="contenido-modal" onClick={(e) => e.stopPropagation()}>

        {/* Imagen principal + navegación */}
        <div className="position-relative">
          <img
            src={propiedad.imagenes[indiceActivo]}
            alt={`Foto ${indiceActivo + 1} de ${propiedad.titulo}`}
            className="imagen-principal-galeria"
          />
          {total > 1 && (
            <>
              <button
                className="navegacion-imagen anterior"
                onClick={irAnterior}
                aria-label="Foto anterior"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="navegacion-imagen siguiente"
                onClick={irSiguiente}
                aria-label="Foto siguiente"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </>
          )}
        </div>

        {/* Miniaturas */}
        <div className="px-3 pt-2 pb-0">
          <div className="row g-2">
            {propiedad.imagenes.map((img, idx) => (
              <div className="col-3" key={img}>
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className={`miniatura-galeria ${idx === indiceActivo ? 'activa' : ''}`}
                  onClick={() => setIndiceActivo(idx)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cuerpo: detalle + precio */}
        <div className="cuerpo-modal">
          <div className="d-flex justify-content-between align-items-start">
            <div className="flex-grow-1 me-3">
              <h2 id="titulo-modal" className="h5 mb-1">{propiedad.titulo}</h2>
              <p className="text-muted small mb-0">
                <i className="bi bi-geo-alt me-1"></i>
                {propiedad.comuna}, {propiedad.region}
              </p>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={alCerrar}
              aria-label="Cerrar"
            ></button>
          </div>

          <div className="caracteristicas-modal">
            <span><i className="bi bi-door-closed"></i> {propiedad.dormitorios} dormitorios</span>
            <span><i className="bi bi-droplet"></i> {propiedad.banos} baños</span>
            <span><i className="bi bi-arrows-angle-expand"></i> {propiedad.superficie} m²</span>
            <span><i className="bi bi-car-front"></i> {propiedad.estacionamientos} estac.</span>
          </div>

          <p className="text-muted small mb-3">{propiedad.descripcion}</p>

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <p className="text-success small fw-bold mb-0">UF {propiedad.uf.toLocaleString('es-CL')}</p>
              <p className="precio-modal mb-0">{etiquetaPrecio}</p>
            </div>
            <button
              type="button"
              className="btn btn-principal"
              onClick={() => alContactar(propiedad)}
            >
              Quiero que me contacten
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ModalGaleria
