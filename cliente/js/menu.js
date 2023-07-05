const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu-nav');
btnMenu.addEventListener('click', ()=>{
  menu.classList.toggle('mostrar');
});

const subMenuBtn = document.querySelectorAll('.submenu-btn');

for(let i =0; i<subMenuBtn.length; i++){
  subMenuBtn[i].addEventListener('click',()=>{
    if(window.innerWidth < 1024){
      const subMenu = this.nextElementSibling;
      const altura = subMenu.scrollHeight;
      if(subMenu.classList.contains('desplegar')){
        subMenu.classList.remove('desplegar');
        subMenu.removeAttribute('style');
      }else{
        subMenu.classList.add('desplegar');
        subMenu.style.height = altura + 'px';
      }
    }
  });
}