import './Filtros.css'

function Filtros({ filtros, alCambiar, alLimpiar, totalResultados }) {
  function actualizarCampo(campo, valor) {
    alCambiar({ ...filtros, [campo]: valor })
  }

  return (
    <section className="panel-filtros">
      <div className="row g-3 align-items-end">

        <div className="col-6 col-md-2">
          <label htmlFor="filtro-operacion" className="etiqueta-campo">
            Operación
          </label>
          <select
            id="filtro-operacion"
            className="form-select"
            value={filtros.operacion}
            onChange={(e) => actualizarCampo('operacion', e.target.value)}
          >
            <option value="todas">Todas</option>
            <option value="venta">Venta</option>
            <option value="arriendo">Arriendo</option>
          </select>
        </div>

        <div className="col-6 col-md-2">
          <label htmlFor="filtro-tipo" className="etiqueta-campo">
            Tipo
          </label>
          <select
            id="filtro-tipo"
            className="form-select"
            value={filtros.tipo}
            onChange={(e) => actualizarCampo('tipo', e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="parcela">Parcela</option>
            <option value="oficina">Oficina</option>
          </select>
        </div>

        <div className="col-6 col-md-2">
          <label htmlFor="filtro-comuna" className="etiqueta-campo">
            Comuna
          </label>
          <select
            id="filtro-comuna"
            className="form-select"
            value={filtros.comuna}
            onChange={(e) => actualizarCampo('comuna', e.target.value)}
          >
            <option value="todas">Todas</option>
            <option value="Las Condes">Las Condes</option>
            <option value="La Reina">La Reina</option>
            <option value="Santiago Centro">Santiago Centro</option>
            <option value="Pirque">Pirque</option>
            <option value="Providencia">Providencia</option>
            <option value="Maipú">Maipú</option>
            <option value="Ñuñoa">Ñuñoa</option>
            <option value="Viña del Mar">Viña del Mar</option>
          </select>
        </div>

        <div className="col-6 col-md-2">
          <label htmlFor="filtro-dormitorios" className="etiqueta-campo">
            Dormitorios
          </label>
          <select
            id="filtro-dormitorios"
            className="form-select"
            value={filtros.dormitorios}
            onChange={(e) => actualizarCampo('dormitorios', e.target.value)}
          >
            <option value="0">Cualquiera</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div className="col-12 col-md-3">
          <label htmlFor="filtro-precio" className="etiqueta-campo">
            Precio máx: {Number(filtros.precioMaximo).toLocaleString('es-CL')} UF
          </label>
          <input
            id="filtro-precio"
            type="range"
            className="form-range"
            min="10"
            max="6500"
            step="50"
            value={filtros.precioMaximo}
            onChange={(e) => actualizarCampo('precioMaximo', e.target.value)}
          />
        </div>

        <div className="col-12 col-md-1 d-grid">
          <button type="button" className="btn btn-borde btn-sm" onClick={alLimpiar}>
            Limpiar
          </button>
        </div>
      </div>

      <p className="contador-resultados mb-0">
        <i className="bi bi-house-door me-1"></i>
        {totalResultados} {totalResultados === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
      </p>
    </section>
  )
}

export default Filtros
