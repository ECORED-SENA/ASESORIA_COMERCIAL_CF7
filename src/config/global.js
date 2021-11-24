export default {
  global: {
    componenteFormativo: 'Servicio al cliente',
    descripcionCurso:
      'El servicio y atención al cliente es una actividad importante para el asesor comercial, con herramientas y técnicas identifica situaciones que le permiten tomar acciones de mejora que logran relaciones duraderas con el cliente. El vendedor conocerá cómo define la empresa el triángulo del servicio, los momentos de verdad, el ciclo del servicio al cliente y cómo medir la trazabilidad de servicio. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características de la atención al cliente',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Finalidad de la atención al cliente',
            hash: 't1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Relaciones con clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Satisfacción al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Fidelización al cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Hallazgos en la atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de hallazgos',
            hash: 't5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Finalidad de la atención al cliente',
            hash: 't5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Ciclo de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Triángulo del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Característica del triángulo del servicio',
            hash: 't7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Estructura del triángulo del servicio',
            hash: 't7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Momentos de verdad en el servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Característica del triángulo del servicio',
            hash: 't8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo: 'Elementos que favorecen un momento de verdad',
            hash: 't8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo: 'Tipos de momentos de verdad',
            hash: 't8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Trazabilidad de servicio al cliente',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Albrecht, K. (2006). La revolución del servicio. Temas gerenciales 1ª edición. Editorial 3R Editores.',
    },
    {
      referencia:
        'Beetrack. (sf). Las características de un buen servicio al cliente. ',
      link:
        'https://www.beetrack.com/es/blog/como-dar-buen-servicio-al-cliente-sector-logistico',
    },
    {
      referencia:
        'Cámara de Comercio de Cartagena. (2014). Procedimiento atención de PQRS. ',
      link: 'https://www.cccartagena.org.co/pqrs-2/',
    },
    {
      referencia:
        'Da Silva, D. (2020). Diferencia entre atención al cliente y servicio al cliente. ',
      link:
        'https://www.zendesk.com.mx/blog/diferencia-servicio-atencion-al-cliente/',
    },
    {
      referencia:
        'Geinfor. (sf). Cómo implementar un sistema de trazabilidad en tu empresa. ',
      link:
        'https://geinfor.com/business/como-implementar-un-sistema-de-trazabilidad-en-tu-empresa/',
    },
    {
      referencia:
        'ISOTools. (2016). Cómo definir un proceso para gestionar las reclamaciones de los clientes. ',
      link:
        'https://www.isotools.com.co/definir-proceso-gestionar-las-reclamaciones-los-clientes/',
    },
    {
      referencia:
        'Prieto, J. (2014). Gerencia del servicio. 3ª edición. Ecoe Ediciones.',
    },
    {
      referencia:
        'Serna, H., Barrios, C., Barrios, A. y Castillo, M. (2007). Cómo medir al cliente. Editorial 3R Editores. ',
      link:
        'http://www.panamericanaeditorial.com.co/temas-gerenciales-3r/4464-como-medir-el-valor-del-cliente.html',
    },
    {
      referencia:
        'Siebold, M. (s.f.). Momentos de verdad en la administración del servicio. ',
      link:
        'http://www.mercadeo.com/blog/1967/09/momentos-de-verdad-en-la-administracion-del-servicio/',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        '“La atención al cliente se centra en la resolución de problemas, el manejo de quejas y el soporte técnico” (Da Silva, 2020).',
    },
    {
      termino: 'Momento de verdad',
      significado:
        '“Es un episodio en el cual el cliente entra en contacto con cualquier aspecto de la organización y tiene una impresión sobre la calidad de su servicio” (Albrecht, 2006).',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Es una serie de normas, procedimientos que permiten realizar un seguimiento al producto durante su proceso de fabricación, despacho y entrega al cliente, esta trazabilidad se realiza con el apoyo de tecnologías de georreferenciación aplicadas al producto.',
    },
  ],
  complementario: [
    {
      texto:
        'Da Silva, D. (2020). Diferencia entre atención al cliente y servicio al cliente. ',
      tipo: 'Otro (página web)',
      link:
        'https://www.zendesk.com.mx/blog/diferencia-servicio-atencion-al-cliente/',
    },
    {
      texto:
        'Serna, H., Barrios, C., Barrios, A. y Castillo, M. (2007). Cómo medir al cliente. Editorial 3R Editores.',
      tipo: 'Libro',
      link:
        'http://www.panamericanaeditorial.com.co/temas-gerenciales-3r/4464-como-medir-el-valor-del-cliente.html',
    },
    {
      texto:
        'Beetrack. (sf). Las características de un buen servicio al cliente.',
      tipo: 'Otro (página web)',
      link: 'https://www.zendesk.com.mx/blog/protocolo-de-atencion-al-cliente/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      link:
        'https://www.beetrack.com/es/blog/como-dar-buen-servicio-al-cliente-sector-logistico',
    },
    {
      texto:
        'Da Silva, D. (2020). Protocolo de atención y servicio al cliente: ¿qué es, por qué es importante para tu empresa?, ¿cómo hacerlo y cuáles son sus ventajas?',
      tipo: 'Otro (página web)',
      link:
        'https://www.zendesk.com.mx/blog/diferencia-servicio-atencion-al-cliente/',
    },
    {
      texto:
        'Geinfor. (sf). Cómo implementar un sistema de trazabilidad en tu empresa.',
      tipo: 'Otro (página web)',
      link:
        'https://geinfor.com/business/como-implementar-un-sistema-de-trazabilidad-en-tu-empresa/',
    },
    {
      texto:
        'Cano, Y. (s.f). Ceiba. Triángulo del servicio: una mirada estratégica para los negocios.',
      tipo: 'Otro (página web)',
      link: 'https://www.ceiba.com.co/triangulo-del-servicio/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Javier del Carmen Martínez Pérez',
        cargo: 'Instructor',
        centro: 'Centro de Comercio y Servicios - Regional Bolívar',
      },
      {
        nombre: 'Zenith Chinchilla Ruedas',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta Alvarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
