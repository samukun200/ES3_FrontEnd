import { useEffect, useState } from 'react'
import './ContactoAsesor.css'

const formularioInicial = {
  nombre: '',
  email: '',
  telefono: '',
  interes: 'comprar',
  mensaje: ''
}

function ContactoAsesor({ propiedadPreseleccionada }) {
  const [formulario, setFormulario] = useState(formularioInicial)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  // Precarga el mensaje cuando viene desde el modal de galería
  useEffect(() => {
    if (propiedadPreseleccionada) {
      setFormulario((prev) => ({
        ...prev,
        mensaje: `Hola, me interesa la propiedad "${propiedadPreseleccionada.titulo}" en ${propiedadPreseleccionada.comuna}. Quisiera recibir más información.`
      }))
      setEnviado(false)
    }
  }, [propiedadPreseleccionada])

  function validar(valores) {
    const nuevosErrores = {}

    if (!valores.nombre.trim()) {
      nuevosErrores.nombre = 'Ingresa tu nombre completo.'
    }
    if (!valores.email.trim()) {
      nuevosErrores.email = 'Ingresa tu correo electrónico.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email)) {
      nuevosErrores.email = 'Ingresa un correo válido (ej: nombre@correo.cl).'
    }
    if (!valores.telefono.trim()) {
      nuevosErrores.telefono = 'Ingresa tu número de teléfono.'
    } else if (!/^\+?[0-9 ]{8,15}$/.test(valores.telefono.trim())) {
      nuevosErrores.telefono = 'Ingresa un teléfono válido (ej: +56 9 1234 5678).'
    }
    if (!valores.mensaje.trim()) {
      nuevosErrores.mensaje = 'Escríbenos brevemente qué necesitas.'
    }

    return nuevosErrores
  }

  function actualizarCampo(campo, valor) {
    setFormulario((prev) => ({ ...prev, [campo]: valor }))
    // Limpia el error del campo al escribir
    if (errores[campo]) {
      setErrores((prev) => ({ ...prev, [campo]: undefined }))
    }
  }

  function manejarEnvio(e) {
    e.preventDefault()
    const erroresValidacion = validar(formulario)
    setErrores(erroresValidacion)

    if (Object.keys(erroresValidacion).length === 0) {
      setEnviado(true)
      setFormulario(formularioInicial)
    }
  }

  return (
    <section className="seccion-contacto" id="contacto">
      <div className="container">
        <div className="panel-contacto">
          <div className="row g-4">

            {/* Info del asesor */}
            <div className="col-12 col-lg-4">
              <p className="etiqueta-seccion mb-2" style={{ color: '#f4a49a' }}>
                Contacto
              </p>
              <h2 className="h4 mb-2">
                Habla con un asesor PropiedadChile
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem' }}>
                Nuestros asesores te acompañan en todo el proceso, desde la primera visita hasta
                la firma final, sin costo para ti.
              </p>
              <ul className="info-contacto">
                <li>
                  <i className="bi bi-telephone-fill"></i>
                  +56 2 2345 6789
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>
                  contacto@propiedadchile.cl
                </li>
                <li>
                  <i className="bi bi-clock-fill"></i>
                  Lunes a viernes, 9:00–19:00
                </li>
                <li>
                  <i className="bi bi-whatsapp"></i>
                  WhatsApp disponible
                </li>
              </ul>
            </div>

            {/* Formulario */}
            <div className="col-12 col-lg-8">
              {enviado && (
                <div className="alert alert-success mb-3" role="alert">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  ¡Mensaje enviado! Un asesor se contactará contigo en menos de 24 horas.
                </div>
              )}

              <form noValidate onSubmit={manejarEnvio}>
                <div className="row g-3">

                  <div className="col-12 col-md-6">
                    <label htmlFor="campo-nombre">Nombre completo</label>
                    <input
                      id="campo-nombre"
                      type="text"
                      className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                      placeholder="Ej: Ana García"
                      value={formulario.nombre}
                      onChange={(e) => actualizarCampo('nombre', e.target.value)}
                    />
                    {errores.nombre && (
                      <div className="invalid-feedback">{errores.nombre}</div>
                    )}
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="campo-telefono">Teléfono</label>
                    <input
                      id="campo-telefono"
                      type="tel"
                      className={`form-control ${errores.telefono ? 'is-invalid' : ''}`}
                      placeholder="+56 9 1234 5678"
                      value={formulario.telefono}
                      onChange={(e) => actualizarCampo('telefono', e.target.value)}
                    />
                    {errores.telefono && (
                      <div className="invalid-feedback">{errores.telefono}</div>
                    )}
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="campo-email">Correo electrónico</label>
                    <input
                      id="campo-email"
                      type="email"
                      className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                      placeholder="nombre@correo.cl"
                      value={formulario.email}
                      onChange={(e) => actualizarCampo('email', e.target.value)}
                    />
                    {errores.email && (
                      <div className="invalid-feedback">{errores.email}</div>
                    )}
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="campo-interes">Me interesa</label>
                    <select
                      id="campo-interes"
                      className="form-select"
                      value={formulario.interes}
                      onChange={(e) => actualizarCampo('interes', e.target.value)}
                    >
                      <option value="comprar">Comprar una propiedad</option>
                      <option value="arrendar">Arrendar una propiedad</option>
                      <option value="financiamiento">Asesoría de financiamiento</option>
                      <option value="vender">Vender mi propiedad</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="campo-mensaje">Mensaje</label>
                    <textarea
                      id="campo-mensaje"
                      rows="4"
                      className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                      placeholder="Cuéntanos qué necesitas..."
                      value={formulario.mensaje}
                      onChange={(e) => actualizarCampo('mensaje', e.target.value)}
                    ></textarea>
                    {errores.mensaje && (
                      <div className="invalid-feedback">{errores.mensaje}</div>
                    )}
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-principal px-4">
                      Enviar mensaje
                    </button>
                  </div>

                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactoAsesor
