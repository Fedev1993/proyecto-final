const tiendaContenido = document.getElementById('tiendaContenido');
const btnInicio = document.querySelector('#btn-inicio');
const btnAuri = document.querySelector('#btn-auri');
const btnCompu = document.querySelector('#btn-compu');
const btnMonitor = document.querySelector('#btn-monitor');
const btnMouse = document.querySelector('#btn-mouse'); 
const btnMothers = document.querySelector('#btn-mothers');
const btnPlaca = document.querySelector('#btn-placa');  
const btnProcess = document.querySelector('#btn-process');
const quitarPublicidad = document.querySelector('#banner-container');
const carrito = [];


document.addEventListener('loginCompletado',(event)=>{
  quitarPublicidad.style.display = 'none';
  const valor = event.detail;
  if(valor){
    btnInicio.addEventListener('click',(event)=>{
      event.preventDefault(); 
    
      // Variables para la paginación
  const productosPorPagina = 6; // Número de productos por página
  let paginaActual = 1; // Página actual
  const totalPaginas = Math.ceil(listaProductos.length / productosPorPagina); // Total de páginas
  
  // Función para mostrar los productos de la página actual
  function mostrarProductos() {
    // Limpia el contenido anterior
    tiendaContenido.innerHTML = "";
  
    // Calcula los índices de inicio y fin de los productos en la página actual
    const indiceInicio = (paginaActual - 1) * productosPorPagina;
    const indiceFin = indiceInicio + productosPorPagina;
  
    // Itera sobre los productos de la página actual
    for (let i = indiceInicio; i < indiceFin; i++) {
      const product = listaProductos[i];
  
      if (product) {
        const contenido = document.createElement("div");
        const { id, nombre, cantidad, desc, precio, img } = product;
        contenido.innerHTML = `
          <img src="${img}">
          <h3>${nombre}</h3>
          <p>${desc}</p>
          <p>${precio}$</p>
        `;
  
        tiendaContenido.append(contenido);
  
        const botonCompra = document.createElement("button");
        botonCompra.innerText = "Comprar";
  
        contenido.append(botonCompra);
  
        botonCompra.addEventListener("click", () => {
          const repetidos = carrito.some(
            (productoRepetido) => productoRepetido.id === id
          );
  
          if (repetidos) {
            carrito.map((produc) => {
              if (produc.id === id) {
                produc.cantidad++;
                mostrarCarritoContador();
              }
            });
          } else {
            carrito.push({
              id,
              nombre,
              precio,
              desc,
              cantidad,
              img,
            });
            mostrarCarritoContador();
          }
        });
      }
    }
  }
  
  // Función para cambiar a la página anterior
  function irPaginaAnterior() {
    if (paginaActual > 1) {
      paginaActual--;
      mostrarProductos();
    }
  }
  
  // Función para cambiar a la página siguiente
  function irPaginaSiguiente() {
    if (paginaActual < totalPaginas) {
      paginaActual++;
      mostrarProductos();
    }
  }
  
  // Event listeners de los botones de paginación
  btnInicio.addEventListener("click", (event) => {
    event.preventDefault();
    paginaActual = 1;
    mostrarProductos();
  });
  
  btnAnterior.addEventListener("click", (event) => {
    event.preventDefault();
    irPaginaAnterior();
  });
  
  btnSiguiente.addEventListener("click", (event) => {
    event.preventDefault();
    irPaginaSiguiente();
  });
  
  // Mostrar los productos de la página actual al cargar la página
  mostrarProductos();
  
    });
    
    //Lista Productos
    btnAuri.addEventListener('click',(event)=>{
      tiendaContenido.innerHTML = "";
      event.preventDefault(); 
    
      listaAuriculares.forEach((products)=>{
        const contenido = document.createElement('div');
        const {id, nombre, cantidad, desc, precio, img } = products;
        contenido.innerHTML = `
        <img src="${img}">
        <h3>${nombre}</h3>
        <p>${desc}</p>
        <p>${precio}$</p>
        `;
      
      tiendaContenido.append(contenido);
      
      const botonCompra = document.createElement('button');
      botonCompra.innerText = 'Comprar';
      
      contenido.append(botonCompra);
      
      botonCompra.addEventListener('click',()=>{
        const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
      
        if(repetidos){
          carrito.map((produc)=>{
            if(produc.id === id){
              produc.cantidad++;
              mostrarCarritoContador();
            }
          });
        }else{
          carrito.push({
            id,
            nombre,
            precio,
            desc,
            cantidad,
            img
          });
          mostrarCarritoContador();
        }
      
      });
      });
   
    });
    
    btnCompu.addEventListener('click',(event)=>{
      tiendaContenido.innerHTML = "";
      event.preventDefault(); 
    
    listaComputadoras.forEach((products)=>{
      const contenido = document.createElement('div');
      const {id, nombre, cantidad, desc, precio, img } = products;
      contenido.innerHTML = `
      <img src="${img}">
      <h3>${nombre}</h3>
      <p>${desc}</p>
      <p>${precio}$</p>
      `;
    
    tiendaContenido.append(contenido);
    
    const botonCompra = document.createElement('button');
    botonCompra.innerText = 'Comprar';
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener('click',()=>{
      const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
    
      if(repetidos){
        carrito.map((produc)=>{
          if(produc.id === id){
            produc.cantidad++;
            mostrarCarritoContador();
          }
        });
      }else{
        carrito.push({
          id,
          nombre,
          precio,
          desc,
          cantidad,
          img
        });
        mostrarCarritoContador();
      }
    
    });
    });
    });
    
    btnMonitor.addEventListener('click',(event)=>{
      tiendaContenido.innerHTML = "";
      event.preventDefault(); 
    
    listaMonitor.forEach((products)=>{
      const contenido = document.createElement('div');
      const {id, nombre, cantidad, desc, precio, img } = products;
      contenido.innerHTML = `
      <img src="${img}">
      <h3>${nombre}</h3>
      <p>${desc}</p>
      <p>${precio}$</p>
      `;
    
    tiendaContenido.append(contenido);
    
    const botonCompra = document.createElement('button');
    botonCompra.innerText = 'Comprar';
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener('click',()=>{
      const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
    
      if(repetidos){
        carrito.map((produc)=>{
          if(produc.id === id){
            produc.cantidad++;
            mostrarCarritoContador();
          }
        });
      }else{
        carrito.push({
          id,
          nombre,
          precio,
          desc,
          cantidad,
          img
        });
        mostrarCarritoContador();
      }
    
    });
    
    });
    });
    
    btnMouse.addEventListener('click',(event)=>{
    event.preventDefault();
    tiendaContenido.innerHTML = "";
    listaMouse.forEach((products)=>{
      const contenido = document.createElement('div');
      const {id, nombre, cantidad, desc, precio, img } = products;
      contenido.innerHTML = `
      <img src="${img}">
      <h3>${nombre}</h3>
      <p>${desc}</p>
      <p>${precio}$</p>
      `;
    
    tiendaContenido.append(contenido);
    
    const botonCompra = document.createElement('button');
    botonCompra.innerText = 'Comprar';
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener('click',()=>{
      const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
    
      if(repetidos){
        carrito.map((produc)=>{
          if(produc.id === id){
            produc.cantidad++;
            mostrarCarritoContador();
          }
        });
      }else{
        carrito.push({
          id,
          nombre,
          precio,
          desc,
          cantidad,
          img
        });
        mostrarCarritoContador();
      }
    
    });
    
    });
    });
    
    btnMothers.addEventListener('click',(event)=>{
    event.preventDefault();
    tiendaContenido.innerHTML = "";
    listaMother.forEach((products)=>{
      const contenido = document.createElement('div');
      const {id, nombre, cantidad, desc, precio, img } = products;
      contenido.innerHTML = `
      <img src="${img}">
      <h3>${nombre}</h3>
      <p>${desc}</p>
      <p>${precio}$</p>
      `;
    
    tiendaContenido.append(contenido);
    
    const botonCompra = document.createElement('button');
    botonCompra.innerText = 'Comprar';
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener('click',()=>{
      const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
    
      if(repetidos){
        carrito.map((produc)=>{
          if(produc.id === id){
            produc.cantidad++;
            mostrarCarritoContador();
          }
        });
      }else{
        carrito.push({
          id,
          nombre,
          precio,
          desc,
          cantidad,
          img
        });
        mostrarCarritoContador();
      }
    
    });
    
    });
    });
    
    btnPlaca.addEventListener('click',(event)=>{
    event.preventDefault();
    tiendaContenido.innerHTML = "";
    listaPlacasVideos.forEach((products)=>{
      const contenido = document.createElement('div');
      const {id, nombre, cantidad, desc, precio, img } = products;
      contenido.innerHTML = `
      <img src="${img}">
      <h3>${nombre}</h3>
      <p>${desc}</p>
      <p>${precio}$</p>
      `;
    
    tiendaContenido.append(contenido);
    
    const botonCompra = document.createElement('button');
    botonCompra.innerText = 'Comprar';
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener('click',()=>{
      const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
    
      if(repetidos){
        carrito.map((produc)=>{
          if(produc.id === id){
            produc.cantidad++;
            mostrarCarritoContador();
          }
        });
      }else{
        carrito.push({
          id,
          nombre,
          precio,
          desc,
          cantidad,
          img
        });
        mostrarCarritoContador();
      }
    
    });
    
    });
    });
    
    btnProcess.addEventListener('click',(event)=>{
    event.preventDefault();
    tiendaContenido.innerHTML = "";
    listaProcesadores.forEach((products)=>{
      const contenido = document.createElement('div');
      const {id, nombre, cantidad, desc, precio, img } = products;
      contenido.innerHTML = `
      <img src="${img}">
      <h3>${nombre}</h3>
      <p>${desc}</p>
      <p>${precio}$</p>
      `;
    
    tiendaContenido.append(contenido);
    
    const botonCompra = document.createElement('button');
    botonCompra.innerText = 'Comprar';
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener('click',()=>{
      const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
    
      if(repetidos){
        carrito.map((produc)=>{
          if(produc.id === id){
            produc.cantidad++;
            mostrarCarritoContador();
          }
        });
      }else{
        carrito.push({
          id,
          nombre,
          precio,
          desc,
          cantidad,
          img
        });
        mostrarCarritoContador();
      }
    
    });
    
    });
    });
  }
});


btnInicio.addEventListener('click',(event)=>{
  quitarPublicidad.style.display = 'none';
    event.preventDefault(); 
  
    // Variables para la paginación
const productosPorPagina = 6; // Número de productos por página
let paginaActual = 1; // Página actual
const totalPaginas = Math.ceil(listaProductos.length / productosPorPagina); // Total de páginas

// Función para mostrar los productos de la página actual
function mostrarProductos() {
  // Limpia el contenido anterior
  tiendaContenido.innerHTML = "";

  // Calcula los índices de inicio y fin de los productos en la página actual
  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = indiceInicio + productosPorPagina;

  // Itera sobre los productos de la página actual
  for (let i = indiceInicio; i < indiceFin; i++) {
    const product = listaProductos[i];

    if (product) {
      const contenido = document.createElement("div");
      const { id, nombre, cantidad, desc, precio, img } = product;
      contenido.innerHTML = `
        <img src="${img}">
        <h3>${nombre}</h3>
        <p>${desc}</p>
      `;

      tiendaContenido.append(contenido);

      const botonCompra = document.createElement("button");
      botonCompra.innerText = "Comprar";

      contenido.append(botonCompra);

      botonCompra.addEventListener("click", () => {
        const repetidos = carrito.some(
          (productoRepetido) => productoRepetido.id === id
        );

        if (repetidos) {
          carrito.map((produc) => {
            if (produc.id === id) {
              produc.cantidad++;
              mostrarCarritoContador();
            }
          });
        } else {
          carrito.push({
            id,
            nombre,
            precio,
            desc,
            cantidad,
            img,
          });
          mostrarCarritoContador();
        }
      });
    }
  }
}

// Función para cambiar a la página anterior
function irPaginaAnterior() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductos();
  }
}

// Función para cambiar a la página siguiente
function irPaginaSiguiente() {
  if (paginaActual < totalPaginas) {
    paginaActual++;
    mostrarProductos();
  }
}

// Event listeners de los botones de paginación
btnInicio.addEventListener("click", (event) => {
  event.preventDefault();
  paginaActual = 1;
  mostrarProductos();
});

btnAnterior.addEventListener("click", (event) => {
  event.preventDefault();
  irPaginaAnterior();
});

btnSiguiente.addEventListener("click", (event) => {
  event.preventDefault();
  irPaginaSiguiente();
});

// Mostrar los productos de la página actual al cargar la página
mostrarProductos();

  });
  
  //Lista Productos
  btnAuri.addEventListener('click',(event)=>{
    quitarPublicidad.style.display = 'none';
    tiendaContenido.innerHTML = "";
    event.preventDefault(); 
  
    listaAuriculares.forEach((products)=>{
      const contenido = document.createElement('div');
      const {id, nombre, cantidad, desc, precio, img } = products;
      contenido.innerHTML = `
      <img src="${img}">
      <h3>${nombre}</h3>
      <p>${desc}</p>
      `;
    
    tiendaContenido.append(contenido);
    
    const botonCompra = document.createElement('button');
    botonCompra.innerText = 'Comprar';
    
    contenido.append(botonCompra);
    
    botonCompra.addEventListener('click',()=>{
      const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
    
      if(repetidos){
        carrito.map((produc)=>{
          if(produc.id === id){
            produc.cantidad++;
            mostrarCarritoContador();
          }
        });
      }else{
        carrito.push({
          id,
          nombre,
          precio,
          desc,
          cantidad,
          img
        });
        mostrarCarritoContador();
      }
    
    });
    });
 
  });
  
  btnCompu.addEventListener('click',(event)=>{
    quitarPublicidad.style.display = 'none';
    tiendaContenido.innerHTML = "";
    event.preventDefault(); 
  
  listaComputadoras.forEach((products)=>{
    const contenido = document.createElement('div');
    const {id, nombre, cantidad, desc, precio, img } = products;
    contenido.innerHTML = `
    <img src="${img}">
    <h3>${nombre}</h3>
    <p>${desc}</p>
    `;
  
  tiendaContenido.append(contenido);
  
  const botonCompra = document.createElement('button');
  botonCompra.innerText = 'Comprar';
  
  contenido.append(botonCompra);
  
  botonCompra.addEventListener('click',()=>{
    const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
  
    if(repetidos){
      carrito.map((produc)=>{
        if(produc.id === id){
          produc.cantidad++;
          mostrarCarritoContador();
        }
      });
    }else{
      carrito.push({
        id,
        nombre,
        precio,
        desc,
        cantidad,
        img
      });
      mostrarCarritoContador();
    }
  
  });
  });
  });
  
  btnMonitor.addEventListener('click',(event)=>{
    quitarPublicidad.style.display = 'none';
    tiendaContenido.innerHTML = "";
    event.preventDefault(); 
  
  listaMonitor.forEach((products)=>{
    const contenido = document.createElement('div');
    const {id, nombre, cantidad, desc, precio, img } = products;
    contenido.innerHTML = `
    <img src="${img}">
    <h3>${nombre}</h3>
    <p>${desc}</p>
    `;
  
  tiendaContenido.append(contenido);
  
  const botonCompra = document.createElement('button');
  botonCompra.innerText = 'Comprar';
  
  contenido.append(botonCompra);
  
  botonCompra.addEventListener('click',()=>{
    const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
  
    if(repetidos){
      carrito.map((produc)=>{
        if(produc.id === id){
          produc.cantidad++;
          mostrarCarritoContador();
        }
      });
    }else{
      carrito.push({
        id,
        nombre,
        precio,
        desc,
        cantidad,
        img
      });
      mostrarCarritoContador();
    }
  
  });
  
  });
  });
  
  btnMouse.addEventListener('click',(event)=>{
    quitarPublicidad.style.display = 'none';
  event.preventDefault();
  tiendaContenido.innerHTML = "";
  listaMouse.forEach((products)=>{
    const contenido = document.createElement('div');
    const {id, nombre, cantidad, desc, precio, img } = products;
    contenido.innerHTML = `
    <img src="${img}">
    <h3>${nombre}</h3>
    <p>${desc}</p>
    `;
  
  tiendaContenido.append(contenido);
  
  const botonCompra = document.createElement('button');
  botonCompra.innerText = 'Comprar';
  
  contenido.append(botonCompra);
  
  botonCompra.addEventListener('click',()=>{
    const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
  
    if(repetidos){
      carrito.map((produc)=>{
        if(produc.id === id){
          produc.cantidad++;
          mostrarCarritoContador();
        }
      });
    }else{
      carrito.push({
        id,
        nombre,
        precio,
        desc,
        cantidad,
        img
      });
      mostrarCarritoContador();
    }
  
  });
  
  });
  });
  
  btnMothers.addEventListener('click',(event)=>{
    quitarPublicidad.style.display = 'none';
  event.preventDefault();
  tiendaContenido.innerHTML = "";
  listaMother.forEach((products)=>{
    const contenido = document.createElement('div');
    const {id, nombre, cantidad, desc, precio, img } = products;
    contenido.innerHTML = `
    <img src="${img}">
    <h3>${nombre}</h3>
    <p>${desc}</p>
    `;
  
  tiendaContenido.append(contenido);
  
  const botonCompra = document.createElement('button');
  botonCompra.innerText = 'Comprar';
  
  contenido.append(botonCompra);
  
  botonCompra.addEventListener('click',()=>{
    const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
  
    if(repetidos){
      carrito.map((produc)=>{
        if(produc.id === id){
          produc.cantidad++;
          mostrarCarritoContador();
        }
      });
    }else{
      carrito.push({
        id,
        nombre,
        precio,
        desc,
        cantidad,
        img
      });
      mostrarCarritoContador();
    }
  
  });
  
  });
  });
  
  btnPlaca.addEventListener('click',(event)=>{
    quitarPublicidad.style.display = 'none';
  event.preventDefault();
  tiendaContenido.innerHTML = "";
  listaPlacasVideos.forEach((products)=>{
    const contenido = document.createElement('div');
    const {id, nombre, cantidad, desc, precio, img } = products;
    contenido.innerHTML = `
    <img src="${img}">
    <h3>${nombre}</h3>
    <p>${desc}</p>
    `;
  
  tiendaContenido.append(contenido);
  
  const botonCompra = document.createElement('button');
  botonCompra.innerText = 'Comprar';
  
  contenido.append(botonCompra);
  
  botonCompra.addEventListener('click',()=>{
    const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
  
    if(repetidos){
      carrito.map((produc)=>{
        if(produc.id === id){
          produc.cantidad++;
          mostrarCarritoContador();
        }
      });
    }else{
      carrito.push({
        id,
        nombre,
        precio,
        desc,
        cantidad,
        img
      });
      mostrarCarritoContador();
    }
  
  });
  
  });
  });
  
  btnProcess.addEventListener('click',(event)=>{
    quitarPublicidad.style.display = 'none';
  event.preventDefault();
  tiendaContenido.innerHTML = "";
  listaProcesadores.forEach((products)=>{
    const contenido = document.createElement('div');
    const {id, nombre, cantidad, desc, precio, img } = products;
    contenido.innerHTML = `
    <img src="${img}">
    <h3>${nombre}</h3>
    <p>${desc}</p>
    `;
  
  tiendaContenido.append(contenido);
  
  const botonCompra = document.createElement('button');
  botonCompra.innerText = 'Comprar';
  
  contenido.append(botonCompra);
  
  botonCompra.addEventListener('click',()=>{
    const repetidos = carrito.some((productoRepetido) => productoRepetido.id === id);
  
    if(repetidos){
      carrito.map((produc)=>{
        if(produc.id === id){
          produc.cantidad++;
          mostrarCarritoContador();
        }
      });
    }else{
      carrito.push({
        id,
        nombre,
        precio,
        desc,
        cantidad,
        img
      });
      mostrarCarritoContador();
    }
  
  });
  
  });
  });

