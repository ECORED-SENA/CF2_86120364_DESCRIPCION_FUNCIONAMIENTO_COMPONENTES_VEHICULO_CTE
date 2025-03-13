export default {
  global: {
    Name: 'Los ejes de propulsión y el cardán',
    Description:
      'Los ejes de propulsión y el cardán, elementos esenciales que se requieren para poder transmitir el movimiento desde la caja de cambios y/o la caja de transferencia hacia las ruedas, aunque las juntas (uniones) usadas en el cardán dependen del tipo de trabajo que realizarán, deben saber emplearse para optimizar el performance del vehículo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La propulsión de la fuerza del motor hasta las ruedas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Crucetas o juntas universales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'La propulsión de la fuerza del motor hasta las ruedas',
      referencia:
        'Autos Full. (2019). <i>Tipos de tracción en los AUTOS - ¿Cual Es Mejor?</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/DXOKnoJo48M?si=avV7g72X_cOHuJYI',
    },
    {
      tema: 'La propulsión de la fuerza del motor hasta las ruedas',
      referencia:
        'Camion Auto y Bus (2020). <i>¿Cómo funciona la flecha cardán?</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Yx-_3VWuvTU?si=ndonQCrLtroZTCoH',
    },
    {
      tema: 'Crucetas o juntas universales',
      referencia:
        'AUTOTECNICATV (2018). <i>Crucetas y Tricetas para traccón trasera y delantera</i>. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/yJ5GZ4I7NfM?si=wR6WL0MiouB6gjhs',
    },
  ],
  glosario: [
    {
      termino: 'Caja de transferencia',
      significado:
        'componente que envía la potencia del motor a los ejes delantero y trasero en vehículos 4x4.',
    },
    {
      termino: 'Cardán',
      significado:
        'eje de transmisión que conecta la caja de cambios con el diferencial.',
    },
    {
      termino: 'Cruceta',
      significado:
        'junta universal que permite la articulación del cardán y la absorción de movimientos.',
    },
    {
      termino: 'Diferencial',
      significado:
        'mecanismo que distribuye la fuerza del motor entre las ruedas motrices.',
    },
    {
      termino: 'Junta flexible',
      significado:
        'conexión de goma que absorbe vibraciones y reduce impactos en la transmisión.',
    },
    {
      termino: 'Propulsión',
      significado:
        'transmisión de la fuerza del motor hacia las ruedas del vehículo.',
    },
    {
      termino: 'Semiejes',
      significado:
        'ejes que transmiten la fuerza desde el diferencial directamente a las ruedas motrices.',
    },
    {
      termino: 'Sistema homocinético',
      significado:
        'mecanismo que permite una transmisión de fuerza más estable en vehículos de alta gama.',
    },
    {
      termino: 'Suspensión',
      significado:
        'conjunto de elementos que absorben impactos y mantienen la estabilidad del vehículo.',
    },
    {
      termino: 'Unidad viscosa',
      significado:
        'sistema que regula la diferencia de torque entre los ejes en vehículos con tracción en las cuatro ruedas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Fernández, A. (2012). <i>La junta cardán, al descubierto</i>.',
      link: '',
    },
    {
      referencia:
        'Jordán, N. (2012). <i>Mundo y moto: Conozca su auto, principio y funciones del eje cardán y diferencial trasero (Parte 1)</i>.',
      link: '',
    },
    {
      referencia:
        'LOS TEQUES ALL TERRAIN. (2022). <i>¿Qué es un eje de transmisión? Partes, función, fallas y más</i>. [Archivo de video] Youtube. ',
      link:
        'https://www.youtube.com/watch?v=HNmLO1pZHW8&ab_channel=LOSTEQUESALLTERRAIN',
    },
    {
      referencia:
        'UMSA. (s.f.). <i>Junta Homocinética: ¿Qué es? ¿Para qué sirve?</i>. ',
      link:
        'https://umsa.reyqui.com/2016/11/junta-homocinetica-que-es-para-que-sirve.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Turismo - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
