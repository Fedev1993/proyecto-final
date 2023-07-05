/*
Arrays con Productos
*/
const listaComputadoras = [
  {
    id: 1,
    nombre: 'Computadora Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion de computadora UNO.",
    precio: 1500,
    img:"./media/store-pc/PC-1.png"
  },
  {
    id: 2,
    nombre: 'Computadora Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion de computadora DOS.",
    precio: 1504320,
    img:"./media/store-pc/PC-2.png"
  },
  {
    id: 3,
    nombre: 'Computadora Prueba 3',
    cantidad: 1,
    desc: "Test de descripcion de computadora TRES.",
    precio: 1532300,
    img:"./media/store-pc/PC-3.png"
  },
  {
    id: 4,
    nombre: 'Computadora Prueba 4',
    cantidad: 1,
    desc: "Test de descripcion de computadora CUATRO.",
    precio: 1523000,
    img:"./media/store-pc/PC-4.png"
  },
  {
    id: 5,
    nombre: 'Computadora Prueba 5',
    cantidad: 1,
    desc: "Test de descripcion de computadora cinco.",
    precio: 1532400,
    img:"./media/store-pc/PC-5.png"
  },
  {
    id: 6,
    nombre: 'Computadora Prueba 6',
    cantidad: 1,
    desc: "Test de descripcion de computadora 6.",
    precio: 152300,
    img:"./media/store-pc/PC-6.png"
  },
  {
    id: 7,
    nombre: 'Computadora Prueba 7',
    cantidad: 1,
    desc: "Test de descripcion de computadora 7.",
    precio: 152300,
    img:"./media/store-pc/PC-7.png"
  },
  {
    id: 8,
    nombre: 'Computadora Prueba 8',
    cantidad: 1,
    desc: "Test de descripcion de computadora 8.",
    precio: 152300,
    img:"./media/store-pc/PC-8.png"
  },
  ];

  const listaAuriculares = [
    {
      id: 9,
      nombre: 'Auricular Prueba 1',
      cantidad: 1,
      desc: "Test de descripcion de Auricular UNO.",
      precio: 150,
      img:"./media/store-auriculares/auriculares-1.png"
    },
    {
      id: 10,
      nombre: 'Auricular Prueba 2',
      cantidad: 1,
      desc: "Test de descripcion de Auricular DOS.",
      precio: 1504,
      img:"./media/store-auriculares/auriculares-2.png"
    },
    {
      id: 11,
      nombre: 'Auricular Prueba 3',
      cantidad: 1,
      desc: "Test de descripcion de Auricular TRES.",
      precio: 1532,
      img:"./media/store-auriculares/auriculares-3.png"
    },
    {
      id: 12,
      nombre: 'Auricular Prueba 4',
      cantidad: 1,
      desc: "Test de descripcion de Auricular CUATRO.",
      precio: 1523,
      img:"./media/store-auriculares/auriculares-4.png"
    },
    {
      id: 13,
      nombre: 'Auricular Prueba 5',
      cantidad: 1,
      desc: "Test de descripcion de Auricular cinco.",
      precio: 1530,
      img:"./media/store-auriculares/auriculares-5.png"
    },
    {
      id: 14,
      nombre: 'Auricular Prueba 6',
      cantidad: 1,
      desc: "Test de descripcion de Auricular 6.",
      precio: 1520,
      img:"./media/store-auriculares/auriculares-6.png"
    },
  ];

  const listaMonitor = [
    {
      id: 15,
      nombre: 'Monitor Prueba 1',
      cantidad: 1,
      desc: "Test de descripcion de Monitor UNO.",
      precio: 150,
      img:"./media/store-monitor/monitor-1.png"
    },
    {
      id: 16,
      nombre: 'Monitor Prueba 2',
      cantidad: 1,
      desc: "Test de descripcion de Monitor DOS.",
      precio: 1504,
      img:"./media/store-monitor/monitor-2.png"
    },
    {
      id: 17,
      nombre: 'Monitor Prueba 3',
      cantidad: 1,
      desc: "Test de descripcion de Monitor TRES.",
      precio: 1532,
      img:"./media/store-monitor/monitor-3.png"
    },
    {
      id: 18,
      nombre: 'Monitor Prueba 4',
      cantidad: 1,
      desc: "Test de descripcion de Monitor CUATRO.",
      precio: 1523,
      img:"./media/store-monitor/monitor-4.png"
    },
    {
      id: 19,
      nombre: 'Monitor Prueba 5',
      cantidad: 1,
      desc: "Test de descripcion de Monitor cinco.",
      precio: 1530,
      img:"./media/store-monitor/monitor-5.png"
    },
    {
      id: 20,
      nombre: 'Monitor Prueba 6',
      cantidad: 1,
      desc: "Test de descripcion de Monitor 6.",
      precio: 1520,
      img:"./media/store-monitor/monitor-6.png"
    },
  ];

  const listaTeclados = [
    {
      id: 21,
      nombre: 'Teclado Prueba 1',
      cantidad: 1,
      desc: "Test de descripcion de Teclado UNO.",
      precio: 150,
      img:"./media/store-teclados/teclado-1.png"
    },
    {
      id: 22,
      nombre: 'Teclado Prueba 2',
      cantidad: 1,
      desc: "Test de descripcion de Teclado DOS.",
      precio: 1504,
      img:"./media/store-teclados/teclado-2.png"
    },
    {
      id: 23,
      nombre: 'Teclado Prueba 3',
      cantidad: 1,
      desc: "Test de descripcion de Teclado TRES.",
      precio: 1532,
      img:"./media/store-teclados/teclado-3.png"
    },
    {
      id: 24,
      nombre: 'Teclado Prueba 4',
      cantidad: 1,
      desc: "Test de descripcion de Teclado CUATRO.",
      precio: 1523,
      img:"./media/store-teclados/teclado-4.png"
    },
  ];

  const listaMouse = [
      {
        id: 25,
        nombre: 'Mouse Prueba 1',
        cantidad: 1,
        desc: "Test de descripcion de Mouse UNO.",
        precio: 150,
        img:"./media/store-mouse/mouse-1.png"
      },
      {
        id: 26,
        nombre: 'Mouse Prueba 2',
        cantidad: 1,
        desc: "Test de descripcion de Mouse DOS.",
        precio: 1504,
        img:"./media/store-mouse/mouse-2.png"
      },
      {
        id: 27,
        nombre: 'Mouse Prueba 3',
        cantidad: 1,
        desc: "Test de descripcion de Mouse TRES.",
        precio: 1532,
        img:"./media/store-mouse/mouse-3.png"
      },
      {
        id: 28,
        nombre: 'Mouse Prueba 4',
        cantidad: 1,
        desc: "Test de descripcion de Mouse CUATRO.",
        precio: 1523,
        img:"./media/store-mouse/mouse-3.png"
      }, 
  ];

  const listaMother = [
    {
      id: 29,
      nombre: 'Placa Madre Prueba 1',
      cantidad: 1,
      desc: "Test de descripcion de Placa Madre Uno.",
      precio: 1523,
      img:"./media/store-placas-madre/placa-1.png"
    }, 
    {
      id: 30,
      nombre: 'Placa Madre Prueba 2',
      cantidad: 1,
      desc: "Test de descripcion de Placa Madre Dos.",
      precio: 1523,
      img:"./media/store-placas-madre/placa-2.png"
    }, 
    {
      id: 31,
      nombre: 'Placa Madre Prueba 3',
      cantidad: 1,
      desc: "Test de descripcion de Placa Madre Tres.",
      precio: 1523,
      img:"./media/store-placas-madre/placa-3.png"
    }, 
    {
      id: 32,
      nombre: 'Placa Madre Prueba 4',
      cantidad: 1,
      desc: "Test de descripcion de Placa Madre Cuatro.",
      precio: 1523,
      img:"./media/store-placas-madre/placa-4.png"
    }, 
    {
      id: 33,
      nombre: 'Placa Madre Prueba 5',
      cantidad: 1,
      desc: "Test de descripcion de Placa Madre Cinco.",
      precio: 1523,
      img:"./media/store-placas-madre/placa-5.png"
    }, 
    {
      id: 34,
      nombre: 'Placa Madre Prueba 6',
      cantidad: 1,
      desc: "Test de descripcion de Placa Madre Seis.",
      precio: 1523,
      img:"./media/store-placas-madre/placa-6.png"
    }, 
    {
      id: 35,
      nombre: 'Placa Madre Prueba 7',
      cantidad: 1,
      desc: "Test de descripcion de Placa Madre Siete.",
      precio: 1523,
      img:"./media/store-placas-madre/placa-7.png"
    }, 
  ];

  const listaPlacasVideos = [
    {
      id: 36,
      nombre: 'Placa de Video Prueba 1',
      cantidad: 1,
      desc: "Test de descripcion de Placa de Video Uno.",
      precio: 1523,
      img:"./media/store-placas-video/video-1.png"
    }, 
    {
      id: 37,
      nombre: 'Placa de Video Prueba 2',
      cantidad: 1,
      desc: "Test de descripcion de Placa de Video Dos.",
      precio: 1523,
      img:"./media/store-placas-video/video-2.png"
    }
  ];

  const listaProcesadores = [
    {
      id: 38,
      nombre: 'Procesador Prueba 1',
      cantidad: 1,
      desc: "Test de descripcion Procesador Uno.",
      precio: 1523,
      img:"./media/store-procesadores/procesador-1.png"
    },
    {
      id: 39,
      nombre: 'Procesador Prueba 2',
      cantidad: 1,
      desc: "Test de descripcion Procesador Dos.",
      precio: 1523,
      img:"./media/store-procesadores/procesador-2.png"
    },
    {
      id: 40,
      nombre: 'Procesador Prueba 3',
      cantidad: 1,
      desc: "Test de descripcion Procesador Tres.",
      precio: 1523,
      img:"./media/store-procesadores/procesador-3.png"
    },
    {
      id: 41,
      nombre: 'Procesador Prueba 4',
      cantidad: 1,
      desc: "Test de descripcion Procesador Cuatro.",
      precio: 1523,
      img:"./media/store-procesadores/procesador-4.png"
    },
    {
      id: 43,
      nombre: 'Procesador Prueba 5',
      cantidad: 1,
      desc: "Test de descripcion Procesador Cinco.",
      precio: 1523,
      img:"./media/store-procesadores/procesador-5.png"
    },
  ];

const listaProductos = [
  {
    id: 1,
    nombre: 'Computadora Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion de computadora UNO.",
    precio: 1500,
    img:"./media/store-pc/PC-1.png"
  },
  {
    id: 2,
    nombre: 'Computadora Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion de computadora DOS.",
    precio: 1504320,
    img:"./media/store-pc/PC-2.png"
  },
  {
    id: 3,
    nombre: 'Computadora Prueba 3',
    cantidad: 1,
    desc: "Test de descripcion de computadora TRES.",
    precio: 1532300,
    img:"./media/store-pc/PC-3.png"
  },
  {
    id: 4,
    nombre: 'Computadora Prueba 4',
    cantidad: 1,
    desc: "Test de descripcion de computadora CUATRO.",
    precio: 1523000,
    img:"./media/store-pc/PC-4.png"
  },
  {
    id: 5,
    nombre: 'Computadora Prueba 5',
    cantidad: 1,
    desc: "Test de descripcion de computadora cinco.",
    precio: 1532400,
    img:"./media/store-pc/PC-5.png"
  },
  {
    id: 6,
    nombre: 'Computadora Prueba 6',
    cantidad: 1,
    desc: "Test de descripcion de computadora 6.",
    precio: 152300,
    img:"./media/store-pc/PC-6.png"
  },
  {
    id: 7,
    nombre: 'Computadora Prueba 7',
    cantidad: 1,
    desc: "Test de descripcion de computadora 7.",
    precio: 152300,
    img:"./media/store-pc/PC-7.png"
  },
  {
    id: 8,
    nombre: 'Computadora Prueba 8',
    cantidad: 1,
    desc: "Test de descripcion de computadora 8.",
    precio: 152300,
    img:"./media/store-pc/PC-8.png"
  },
  {
    id: 9,
    nombre: 'Auricular Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion de Auricular UNO.",
    precio: 150,
    img:"./media/store-auriculares/auriculares-1.png"
  },
  {
    id: 10,
    nombre: 'Auricular Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion de Auricular DOS.",
    precio: 1504,
    img:"./media/store-auriculares/auriculares-2.png"
  },
  {
    id: 11,
    nombre: 'Auricular Prueba 3',
    cantidad: 1,
    desc: "Test de descripcion de Auricular TRES.",
    precio: 1532,
    img:"./media/store-auriculares/auriculares-3.png"
  },
  {
    id: 12,
    nombre: 'Auricular Prueba 4',
    cantidad: 1,
    desc: "Test de descripcion de Auricular CUATRO.",
    precio: 1523,
    img:"./media/store-auriculares/auriculares-4.png"
  },
  {
    id: 13,
    nombre: 'Auricular Prueba 5',
    cantidad: 1,
    desc: "Test de descripcion de Auricular cinco.",
    precio: 1530,
    img:"./media/store-auriculares/auriculares-5.png"
  },
  {
    id: 14,
    nombre: 'Auricular Prueba 6',
    cantidad: 1,
    desc: "Test de descripcion de Auricular 6.",
    precio: 1520,
    img:"./media/store-auriculares/auriculares-6.png"
  },
  {
    id: 15,
    nombre: 'Monitor Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion de Monitor UNO.",
    precio: 150,
    img:"./media/store-monitor/monitor-1.png"
  },
  {
    id: 16,
    nombre: 'Monitor Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion de Monitor DOS.",
    precio: 1504,
    img:"./media/store-monitor/monitor-2.png"
  },
  {
    id: 17,
    nombre: 'Monitor Prueba 3',
    cantidad: 1,
    desc: "Test de descripcion de Monitor TRES.",
    precio: 1532,
    img:"./media/store-monitor/monitor-3.png"
  },
  {
    id: 18,
    nombre: 'Monitor Prueba 4',
    cantidad: 1,
    desc: "Test de descripcion de Monitor CUATRO.",
    precio: 1523,
    img:"./media/store-monitor/monitor-4.png"
  },
  {
    id: 19,
    nombre: 'Monitor Prueba 5',
    cantidad: 1,
    desc: "Test de descripcion de Monitor cinco.",
    precio: 1530,
    img:"./media/store-monitor/monitor-5.png"
  },
  {
    id: 20,
    nombre: 'Monitor Prueba 6',
    cantidad: 1,
    desc: "Test de descripcion de Monitor 6.",
    precio: 1520,
    img:"./media/store-monitor/monitor-6.png"
  },
  {
    id: 21,
    nombre: 'Teclado Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion de Teclado UNO.",
    precio: 150,
    img:"./media/store-teclados/teclado-1.png"
  },
  {
    id: 22,
    nombre: 'Teclado Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion de Teclado DOS.",
    precio: 1504,
    img:"./media/store-teclados/teclado-2.png"
  },
  {
    id: 23,
    nombre: 'Teclado Prueba 3',
    cantidad: 1,
    desc: "Test de descripcion de Teclado TRES.",
    precio: 1532,
    img:"./media/store-teclados/teclado-3.png"
  },
  {
    id: 24,
    nombre: 'Teclado Prueba 4',
    cantidad: 1,
    desc: "Test de descripcion de Teclado CUATRO.",
    precio: 1523,
    img:"./media/store-teclados/teclado-4.png"
  },
  {
    id: 25,
    nombre: 'Mouse Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion de Mouse UNO.",
    precio: 150,
    img:"./media/store-mouse/mouse-1.png"
  },
  {
    id: 26,
    nombre: 'Mouse Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion de Mouse DOS.",
    precio: 1504,
    img:"./media/store-mouse/mouse-2.png"
  },
  {
    id: 27,
    nombre: 'Mouse Prueba 3',
    cantidad: 1,
    desc: "Test de descripcion de Mouse TRES.",
    precio: 1532,
    img:"./media/store-mouse/mouse-3.png"
  },
  {
    id: 28,
    nombre: 'Mouse Prueba 4',
    cantidad: 1,
    desc: "Test de descripcion de Mouse CUATRO.",
    precio: 1523,
    img:"./media/store-mouse/mouse-3.png"
  }, 
  {
    id: 29,
    nombre: 'Placa Madre Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion de Placa Madre Uno.",
    precio: 1523,
    img:"./media/store-placas-madre/placa-1.png"
  }, 
  {
    id: 30,
    nombre: 'Placa Madre Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion de Placa Madre Dos.",
    precio: 1523,
    img:"./media/store-placas-madre/placa-2.png"
  }, 
  {
    id: 31,
    nombre: 'Placa Madre Prueba 3',
    cantidad: 1,
    desc: "Test de descripcion de Placa Madre Tres.",
    precio: 1523,
    img:"./media/store-placas-madre/placa-3.png"
  }, 
  {
    id: 32,
    nombre: 'Placa Madre Prueba 4',
    cantidad: 1,
    desc: "Test de descripcion de Placa Madre Cuatro.",
    precio: 1523,
    img:"./media/store-placas-madre/placa-4.png"
  }, 
  {
    id: 33,
    nombre: 'Placa Madre Prueba 5',
    cantidad: 1,
    desc: "Test de descripcion de Placa Madre Cinco.",
    precio: 1523,
    img:"./media/store-placas-madre/placa-5.png"
  }, 
  {
    id: 34,
    nombre: 'Placa Madre Prueba 6',
    cantidad: 1,
    desc: "Test de descripcion de Placa Madre Seis.",
    precio: 1523,
    img:"./media/store-placas-madre/placa-6.png"
  }, 
  {
    id: 35,
    nombre: 'Placa Madre Prueba 7',
    cantidad: 1,
    desc: "Test de descripcion de Placa Madre Siete.",
    precio: 1523,
    img:"./media/store-placas-madre/placa-7.png"
  }, 
  {
    id: 36,
    nombre: 'Placa de Video Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion de Placa de Video Uno.",
    precio: 1523,
    img:"./media/store-placas-video/video-1.png"
  }, 
  {
    id: 37,
    nombre: 'Placa de Video Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion de Placa de Video Dos.",
    precio: 1523,
    img:"./media/store-placas-video/video-2.png"
  },
  {
    id: 38,
    nombre: 'Procesador Prueba 1',
    cantidad: 1,
    desc: "Test de descripcion Procesador Uno.",
    precio: 1523,
    img:"./media/store-procesadores/procesador-1.png"
  },
  {
    id: 39,
    nombre: 'Procesador Prueba 2',
    cantidad: 1,
    desc: "Test de descripcion Procesador Dos.",
    precio: 1523,
    img:"./media/store-procesadores/procesador-2.png"
  },
  {
    id: 40,
    nombre: 'Procesador Prueba 3',
    cantidad: 1,
    desc: "Test de descripcion Procesador Tres.",
    precio: 1523,
    img:"./media/store-procesadores/procesador-3.png"
  },
  {
    id: 41,
    nombre: 'Procesador Prueba 4',
    cantidad: 1,
    desc: "Test de descripcion Procesador Cuatro.",
    precio: 1523,
    img:"./media/store-procesadores/procesador-4.png"
  },
  {
    id: 43,
    nombre: 'Procesador Prueba 5',
    cantidad: 1,
    desc: "Test de descripcion Procesador Cinco.",
    precio: 1523,
    img:"./media/store-procesadores/procesador-5.png"
  },
];

