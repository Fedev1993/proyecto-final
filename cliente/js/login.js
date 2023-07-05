const btnLanzarLogin = document.querySelector('#lanzar-login');
const btnOcultarLogin = document.querySelector('#ocultar-modal-form');
const btnCerrarLogin = document.querySelector('#ocultar-modal-cerrar');



const contModalLogin = document.querySelector('.modal-form-contenedor');

const nombreInput = document.querySelector('#login-nombre');
const PassInput = document.querySelector('#login-contraseña');


btnLanzarLogin.addEventListener('click',(event)=>{
  event.preventDefault();
  contModalLogin.classList.add('mostrar-modal');
});

btnOcultarLogin.addEventListener('click',(event)=>{
  event.preventDefault();
  contModalLogin.classList.remove('mostrar-modal');

  const usuario = document.querySelector('.contenedor-usuario');

  const pUsuario = nombreInput.value;
 
  usuario.innerHTML = `¡Bienvenido a SEV ${pUsuario} "The Legacy of Computer", esperamos que disfrutes la compra!`;
  enviarEvento(true);
});

btnCerrarLogin.addEventListener('click',(event)=>{
event.preventDefault();
contModalLogin.classList.remove('mostrar-modal');
});

const enviarEvento = (valor) => {
  const evento = new CustomEvent('loginCompletado', { detail: valor });
  document.dispatchEvent(evento);
};
