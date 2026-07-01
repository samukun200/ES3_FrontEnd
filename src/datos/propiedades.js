const propiedades = [
  {
    id: 1,
    titulo: 'Departamento con vista cordillera',
    operacion: 'venta',
    tipo: 'departamento',
    comuna: 'Las Condes',
    region: 'Metropolitana',
    precio: 95000000,
    uf: 2650,
    dormitorios: 3,
    banos: 2,
    superficie: 95,
    estacionamientos: 1,
    imagenes: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=70'
    ],
    descripcion: 'Amplio departamento de tres dormitorios con vista despejada a la cordillera, cocina americana equipada y terraza orientación oriente.'
  },
  {
    id: 2,
    titulo: 'Casa familiar con jardín',
    operacion: 'venta',
    tipo: 'casa',
    comuna: 'La Reina',
    region: 'Metropolitana',
    precio: 158000000,
    uf: 4400,
    dormitorios: 4,
    banos: 3,
    superficie: 180,
    estacionamientos: 2,
    imagenes: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=70'
    ],
    descripcion: 'Casa de un piso con jardín, quincho techado y living-comedor integrado. Ideal para familias, a pasos de colegios y áreas verdes.'
  },
  {
    id: 3,
    titulo: 'Studio cerca del metro',
    operacion: 'arriendo',
    tipo: 'departamento',
    comuna: 'Santiago Centro',
    region: 'Metropolitana',
    precio: 380000,
    uf: 10.5,
    dormitorios: 1,
    banos: 1,
    superficie: 32,
    estacionamientos: 0,
    imagenes: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=70'
    ],
    descripcion: 'Studio funcional a 3 cuadras del metro. Edificio con gimnasio y sala de eventos. Ideal para estudiantes o profesionales.'
  },
  {
    id: 4,
    titulo: 'Parcela con vista al valle',
    operacion: 'venta',
    tipo: 'parcela',
    comuna: 'Pirque',
    region: 'Metropolitana',
    precio: 220000000,
    uf: 6100,
    dormitorios: 5,
    banos: 4,
    superficie: 450,
    estacionamientos: 4,
    imagenes: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=70'
    ],
    descripcion: 'Parcela de agrado con casa principal, piscina y quincho, rodeada de viñedos. Vista panorámica al valle, ideal para descanso.'
  },
  {
    id: 5,
    titulo: 'Oficina corporativa amoblada',
    operacion: 'arriendo',
    tipo: 'oficina',
    comuna: 'Providencia',
    region: 'Metropolitana',
    precio: 850000,
    uf: 23.6,
    dormitorios: 0,
    banos: 2,
    superficie: 120,
    estacionamientos: 2,
    imagenes: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=70'
    ],
    descripcion: 'Oficina amoblada en torre corporativa, sala de reuniones equipada y recepción compartida. Dos estacionamientos incluidos.'
  },
  {
    id: 6,
    titulo: 'Casa esquina con quincho',
    operacion: 'venta',
    tipo: 'casa',
    comuna: 'Maipú',
    region: 'Metropolitana',
    precio: 78000000,
    uf: 2170,
    dormitorios: 3,
    banos: 2,
    superficie: 110,
    estacionamientos: 1,
    imagenes: [
      'https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=70'
    ],
    descripcion: 'Casa esquina en condominio cerrado con áreas verdes, quincho techado y bodega. Cerca de colegios, comercio y autopista.'
  },
  {
    id: 7,
    titulo: 'Departamento dúplex con terraza',
    operacion: 'venta',
    tipo: 'departamento',
    comuna: 'Ñuñoa',
    region: 'Metropolitana',
    precio: 132000000,
    uf: 3670,
    dormitorios: 3,
    banos: 2,
    superficie: 105,
    estacionamientos: 1,
    imagenes: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=70'
    ],
    descripcion: 'Dúplex en segundo y tercer piso con terraza privada de 20m², bodega y estacionamiento techado. Barrio residencial tranquilo.'
  },
  {
    id: 8,
    titulo: 'Departamento frente al mar',
    operacion: 'venta',
    tipo: 'departamento',
    comuna: 'Viña del Mar',
    region: 'Valparaíso',
    precio: 175000000,
    uf: 4860,
    dormitorios: 2,
    banos: 2,
    superficie: 88,
    estacionamientos: 1,
    imagenes: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=70',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=70'
    ],
    descripcion: 'Vista directa al mar, edificio con piscina, gimnasio y conserjería 24/7. A pasos del borde costero de Viña del Mar.'
  }
]

export default propiedades
