import { useMemo, useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Filtros from './components/Filtros.jsx'
import GridPropiedades from './components/GridPropiedades.jsx'
import ModalGaleria from './components/ModalGaleria.jsx'
import AcordeonFinanciamiento from './components/AcordeonFinanciamiento.jsx'
import ContactoAsesor from './components/ContactoAsesor.jsx'
import Footer from './components/Footer.jsx'

import propiedades from './datos/propiedades.js'

const filtrosIniciales = {
  operacion: 'todas',
  tipo: 'todos',
  comuna: 'todas',
  dormitorios: '0',
  precioMaximo: '6500',
  busqueda: ''
}

function App() {
  const [filtros, setFiltros] = useState(filtrosIniciales)
  const [propiedadActiva, setPropiedadActiva] = useState(null)
  const [propiedadPreseleccionada, setPropiedadPreseleccionada] = useState(null)

  const propiedadesFiltradas = useMemo(() => {
    return propiedades.filter((p) => {
      if (filtros.operacion !== 'todas' && p.operacion !== filtros.operacion) return false
      if (filtros.tipo !== 'todos' && p.tipo !== filtros.tipo) return false
      if (filtros.comuna !== 'todas' && p.comuna !== filtros.comuna) return false
      if (Number(filtros.dormitorios) > 0 && p.dormitorios < Number(filtros.dormitorios)) return false
      if (p.uf > Number(filtros.precioMaximo)) return false
      if (filtros.busqueda) {
        const termino = filtros.busqueda.toLowerCase()
        const texto = `${p.titulo} ${p.comuna} ${p.region}`.toLowerCase()
        if (!texto.includes(termino)) return false
      }
      return true
    })
  }, [filtros])

  function manejarBusqueda(termino) {
    setFiltros((prev) => ({ ...prev, busqueda: termino }))
  }

  function limpiarFiltros() {
    setFiltros(filtrosIniciales)
  }

  function abrirGaleria(propiedad) {
    setPropiedadActiva(propiedad)
  }

  function cerrarGaleria() {
    setPropiedadActiva(null)
  }

  function irAContacto(propiedad) {
    cerrarGaleria()
    setPropiedadPreseleccionada(propiedad)
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <Navbar alBuscar={manejarBusqueda} />

      <Hero totalPropiedades={propiedades.length} />

      <Features />

      <main>
        <div className="container">
          <Filtros
            filtros={filtros}
            alCambiar={setFiltros}
            alLimpiar={limpiarFiltros}
            totalResultados={propiedadesFiltradas.length}
          />
        </div>

        <GridPropiedades
          propiedades={propiedadesFiltradas}
          alAbrirGaleria={abrirGaleria}
        />
      </main>

      <AcordeonFinanciamiento />

      <ContactoAsesor propiedadPreseleccionada={propiedadPreseleccionada} />

      <Footer />

      <ModalGaleria
        propiedad={propiedadActiva}
        alCerrar={cerrarGaleria}
        alContactar={irAContacto}
      />
    </>
  )
}

export default App
