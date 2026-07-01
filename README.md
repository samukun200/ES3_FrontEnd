# PropiedadChile

Plataforma de búsqueda y venta de propiedades en Chile. Desarrollada con React 18, Vite y Bootstrap 5.

## Requisitos

- Node.js ≥ 18
- pnpm (`npm install -g pnpm` si no lo tienes)

## Instalación y ejecución

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:5173` en el navegador.

## Build de producción

```bash
pnpm build
pnpm preview
```

## Estructura del proyecto

```
PropiedadChile/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── datos/
    │   └── propiedades.js
    └── components/
        ├── BarraNavegacion.jsx
        ├── BarraNavegacion.css
        ├── Inicio.jsx
        ├── Inicio.css
        ├── Filtros.jsx
        ├── Filtros.css
        ├── GridPropiedades.jsx
        ├── GridPropiedades.css
        ├── TarjetaPropiedad.jsx
        ├── TarjetaPropiedad.css
        ├── ModalGaleria.jsx
        ├── ModalGaleria.css
        ├── AcordeonFinanciamiento.jsx
        ├── AcordeonFinanciamiento.css
        ├── ContactoAsesor.jsx
        ├── ContactoAsesor.css
        ├── PiePagina.jsx
        └── PiePagina.css
```

## Funcionalidades

| Requisito | Componente |
|---|---|
| Navbar con búsqueda | `BarraNavegacion.jsx` |
| Filtros avanzados | `Filtros.jsx` |
| Grid de propiedades | `GridPropiedades.jsx` + `TarjetaPropiedad.jsx` |
| Modal con galería de fotos | `ModalGaleria.jsx` |
| Acordeón de financiamiento | `AcordeonFinanciamiento.jsx` |
| Contacto con asesor | `ContactoAsesor.jsx` |
