// Slides del carrusel principal.
// `titulo` y `texto` son arreglos de segmentos: un string se renderiza plano y
// { em: '...' } se resalta en amarillo. Reemplaza al dangerouslySetInnerHTML
// que se usaba antes para lo mismo.
export const slides = [
  {
    id: 'diseno-potencia',
    imagen: '/carousel-tablero1.webp',
    titulo: ['Diseño de sistemas ', { em: 'eléctricos' }, ' de potencia'],
    texto: [
      'Realizamos el diseño integral de redes de media y baja tensión, considerando capacidad de carga, caída de tensión, eficiencia energética y cumplimiento normativo.',
    ],
  },
  {
    id: 'protecciones',
    imagen: '/carousel-tablero2.webp',
    titulo: ['Diseño y coordinación de ', { em: 'protecciones' }],
    texto: [
      'Desarrollamos esquemas de protección selectivos que aseguran la ',
      { em: 'continuidad del servicio' },
      ' y evitan disparos innecesarios ante fallas en el sistema eléctrico.',
    ],
  },
  {
    id: 'seguridad',
    imagen: '/carousel-tablero3.webp',
    titulo: ['Sistemas de ', { em: 'seguridad' }, ' eléctrica'],
    texto: [
      'Aplicamos medidas de protección contra contactos directos e indirectos, fallas a tierra y sobrecorrientes, conforme a ',
      { em: 'reglamentos AEA y normas IEC' },
      '.',
    ],
  },
  {
    id: 'monitoreo',
    imagen: '/carousel-tablero5.webp',
    titulo: ['Monitoreo y ', { em: 'diagnóstico' }, ' de instalaciones de potencia'],
    texto: [
      'Implementamos sistemas de supervisión en tiempo real y análisis de calidad de energía para detectar anomalías y ',
      { em: 'prevenir fallas' },
      ' en la instalación.',
    ],
  },
  {
    id: 'asesoramiento',
    imagen: '/carousel-tablero6.webp',
    titulo: ['Asesoramiento ', { em: 'personalizado' }],
    texto: [
      'Ofrecemos acompañamiento ',
      { em: 'técnico integral' },
      ' en cada etapa del proyecto, adaptando las soluciones a las necesidades específicas de cada cliente.',
    ],
  },
  {
    id: 'tarifas',
    imagen: '/carousel-tablero4.webp',
    titulo: [
      'Diseño de sistemas de potencia para tarifas ',
      { em: 'T1' },
      ', ',
      { em: 'T2' },
      ' y ',
      { em: 'T3' },
    ],
    texto: [
      'Diseñamos instalaciones ',
      { em: 'eléctricas' },
      ' optimizadas para cada nivel ',
      { em: 'tarifario' },
      ', priorizando la eficiencia energética y el cumplimiento con los requerimientos de distribuidoras.',
    ],
  },
];

export const mensajeWhatsappCarrusel = 'Estoy interesado en sus servicios';
