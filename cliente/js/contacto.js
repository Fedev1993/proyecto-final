const btnLanzarContacto = document.querySelector('#display-contacto');
const btnOcultarContacto = document.querySelector('#ocultar-contacto-form');
const btnCerrarContacto = document.querySelector('#ocultar-contacto-cerrar');

const contModalContacto = document.querySelector('.modal-contacto-contenedor');

const usuarioContacto = document.querySelector('#contacto-usario');

btnLanzarContacto.addEventListener('click',(event)=>{
  event.preventDefault();
  contModalContacto.classList.add('mostrar-contacto');
});

btnOcultarContacto.addEventListener('click',(event)=>{
  event.preventDefault();
  contModalContacto.classList.remove('mostrar-contacto');
  const cUsuario = usuarioContacto.value;
  alert(`Gracias ${cUsuario} por ponerte en contacto con nosotros! `)
});

btnCerrarContacto.addEventListener('click',(event)=>{
  event.preventDefault();
  contModalContacto.classList.remove('mostrar-contacto');
  });

  