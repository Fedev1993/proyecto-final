const modalContenedor = document.getElementById('modal-contenedor');
const modalVentana = document.getElementById('modal-ventana'); 
const cartBtn = document.getElementById('cart-btn');
const carritoContador = document.getElementById('cart-counter');

const mostrarCarrito = () =>{
  modalContenedor.innerHTML = '';
  modalContenedor.style.display = 'block';
  modalVentana.style.display = 'block';
  //cabecera
  const modalHeader = document.createElement('div');

  const modalClose = document.createElement('div');
  modalClose.innerText = '❌';
  modalClose.className = 'modal-close';
  modalHeader.append(modalClose);

  modalClose.addEventListener('click',()=>{
    modalContenedor.style.display = 'none';
    modalVentana.style.display = 'none';
  });

  const modalTitle = document.createElement('div');
  modalTitle.innerText = 'Carrito';
  modalTitle.className = 'modal-tittle';
  modalHeader.append(modalTitle);

  modalContenedor.append(modalHeader);

  //modal body

  if(carrito.length > 0){
    
  carrito.forEach((productos)=>{
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    const {id, nombre, cantidad, desc, precio, img } = productos;
    modalBody.innerHTML =`
    <div class="product">
      <img class="product-img" src="${img}" />
      <div class="product-info">
        <h4>${nombre}</h4>
      </div>
      <div class="cantidad">
        <span class="cantidad-btn-decremento">-</span>
        <span class="cantidad-input">${cantidad}</span>
        <span class="cantidad-btn-incremento">+</span>
      </div>
        <div class="precio">${precio*cantidad}$</div>
        <div class="eliminar-producto">❌</div>
    </div>  
    `;

    modalContenedor.append(modalBody);

    const decremento = modalBody.querySelector('.cantidad-btn-decremento');
    decremento.addEventListener('click',()=>{
      if(productos.cantidad !==1 ){
        productos.cantidad--;
        mostrarCarrito();  
      }
      mostrarCarritoContador();
    });

    const incremento = modalBody.querySelector('.cantidad-btn-incremento');
    incremento.addEventListener('click',()=>{
      productos.cantidad++;
      mostrarCarrito();
      mostrarCarritoContador();
    });

    //eliminar elementos..
    const eliminarProducto = modalBody.querySelector('.eliminar-producto');
    eliminarProducto.addEventListener('click',()=>{
      borrarCarritoProducto(id);
    }); 

  });

  //Modal Footer

  const total = carrito.reduce((acumulador,elementos) => acumulador + elementos.precio* elementos.cantidad,0);


  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';
  modalFooter.innerHTML = `
  <div class="total-precio">Total:${total}$</div>
  <button class="btn-primary" id="checkout-btn">Confirmar Compra</button>
  <div id="button-checkout"></div>
  `;
  modalContenedor.append(modalFooter);

  //debemos tener el token de mercadoPago "public_key"
  const mercadopago = new MercadoPago("public_key",{
    local: "es-Ar",
  });

  const checkoutButton = modalFooter.querySelector('#checkout-btn');

  checkoutButton.addEventListener('click',function(){
    checkoutButton.remove();

    const orderData = {
      quantity: 1,
      description: 'Compra en SEV THE LEGACY OF COMPUTER ',
      price: total,
    };

    fetch("http://localhost:8080/create_preference",{
      method: "Post",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
    .then(function (response){
      return response.json();
    })
    .then(function (preference){
      createCheckoutButton(preference.id);
    })
    .catch(function(){
      alert('ERROR No Aceptado.')
    });
  });

  function createCheckoutButton(preferenceId){
    const bricksBuilder = mercadopago.bricks();

    const renderComponent = async (bricksBuilder) =>{
      
      await bricksBuilder.create(
        "wallet",
        "button-checkout",
        {
          initialization:{
            preferenceId: preferenceId,
          },
          callbacks:{
            onError: (error) => console.error(error),
            onReady: () => {},
          },
        }
      )
    }
    window.checkoutButton = renderComponent(bricksBuilder);
  }


 }else{
  const modalText = document.createElement('h2');
  modalText.className = 'modal-body';
  modalText.innerText = 'Tu carrito esta vacio!';
  modalContenedor.append(modalText);
 } 
};

cartBtn.addEventListener('click',mostrarCarrito);

const borrarCarritoProducto = (id)=> {
  const buscarId = carrito.findIndex((elementos)=> elementos.id=== id);
  carrito.splice(buscarId,1);
  mostrarCarrito();
  mostrarCarritoContador();
}

const mostrarCarritoContador = () =>{
  const carritoLenght = carrito.reduce((acumulador,elementos) => acumulador + elementos.cantidad,0);
  if(carritoLenght>0){
    carritoContador.style.display = 'block';
    carritoContador.innerText =  carritoLenght;
  }else{
    carritoContador.style.display = 'none';
  }
}
