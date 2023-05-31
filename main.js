indice();
document.addEventListener("DOMContentLoaded", traerProductos);
const contenedor = document.querySelector("#contenedor");
let respuesta;
let nproductos = 8;
$('#boton1').hide();
$('#boton2').hide();
$('#tramitar').hide();

let carrito;
crearCarrito();

// creo carrito
async function crearCarrito() {
  await fetch('https://fakestoreapi.com/carts', {
    method: "POST",
    body: JSON.stringify(
      {
        userId: 1,
        date: 2023 - 02 - 03,
        products: [{ productId: 1, quantity: 1 }]
      }
    )
  })
    .then(res => res.json())
    .then(json => carrito = json)


}


// traer los productos
async function traerProductos() {
  // console.log("traer prodcutoss " + nproductos);
  const url = "https://fakestoreapi.com/products?limit=" + nproductos;

  try {
    // await bloquea la ejecucion del codigo y hasta que no se resuelva no va  a ejecutarse el resultado
    // fetch coger esa parte
    const resultado = await fetch(url);
    respuesta = await resultado.json();
    console.log(respuesta);
    pintarProductos(respuesta);
  } catch (error) {
    console.log(error);
  }
}

// mostrar productos
function pintarProductos(productos) {
  document.getElementById("contenedor").innerHTML = "";
  // console.log(productos);

  productos.forEach((prod) => {
    const { id, title, price, image,category,description, } = prod;
    document.getElementById("contenedor").innerHTML += `
   
    <div class="col-3">
        <div class="card" style="width: 18rem;">    
  <img class="card-img-top" src="${image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-subtitle mb-2 text-muted">Precio: ${price}</p>
      

       
    <div id="modal${id}" class="modal">
          <h2>Modal</h2>
          <img width="100" src="${image}" alt="Card image cap">
		  <h5 >${title}</h5>
      <p>${category}</p>
      <p width="50">${description}</p>
		  <p>Precio: ${price}</p>
          <button onclick='cerrar(${id})' class="close">Close</button> 
		  <a href="#" onclick='añadirCarrito(${id})' class="btn btn-primary add-to-cart">Añadir al carrito</a>		  
        </div>
        <a href="#" id="${id}" onclick='abrir(${id})' class="btn btn-primary add-to-cart">ver</a>



    <a href="#" onclick='añadirCarrito(${id})' class="btn btn-primary add-to-cart">Añadir al carrito</a>
    
    
  </div>
</div>      
</div>      
        
        `;
  });

}



// ordenar productos
async function ordenardes(){
  console.log("traer prodcutoss " + nproductos);
  const url = "https://fakestoreapi.com/products?sort=desc&limit=" + nproductos;

  try {
    // await bloquea la ejecucion del codigo y hasta que no se resuelva no va  a ejecutarse el resultado
    // fetch coger esa parte
    const resultado = await fetch(url);
    respuesta = await resultado.json();
    console.log(respuesta);
    pintarProductos(respuesta);
  } catch (error) {
    console.log(error);
  }

}
async function ordenarasc(){
  console.log("traer prodcutoss " + nproductos);
  const url = "https://fakestoreapi.com/products?sort=asc&limit=" + nproductos;

  try {
    // await bloquea la ejecucion del codigo y hasta que no se resuelva no va  a ejecutarse el resultado
    // fetch coger esa parte
    const resultado = await fetch(url);
    respuesta = await resultado.json();
    console.log(respuesta);
    pintarProductos(respuesta);
  } catch (error) {
    console.log(error);
  }

}

// modal para ver el producto
function abrir(id){
  $("#modal"+id).show();
}

function cerrar(id){
  $("#modal"+id).hide();
}

// añado producto al carrito
function añadirCarrito(id) {
  console.log(id);
  
  fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
            .then(json=>alert("El producto " +json.title+" se ha añadido al carrito" ))
  
// otro fech con que con update cart actualizadno el producto pa que vea que se compra simularlo
// nos devuelve lo que le mandamos
}


// capas

document.getElementById("indice").addEventListener("click", indice);

function indice() {
  $('#boton1').hide();
  $('#boton2').hide();
  $('#tramitar').hide();
  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  document.getElementById("contenedor").innerHTML =
    /*"<h1>Bienbenido a LozaShop</h1> "*/"<img src='lh.jpg'>";
}
// productos
document.getElementById("Productos").addEventListener("click", function () {
  $('#boton1').show();
  $('#boton2').show();
  $('#tramitar').hide();
  pintarProductos(respuesta);
});


// Categoria Electronics
fetch('https://fakestoreapi.com/products/category/electronics')
  .then(res => res.json())
  .then(json => categoria1 = json)
function muestraCategoria(j) {
  for (i = 0; i < j.length; i++) {
    document.getElementById("categorias").innerHTML += `
      <div class="col-2">
          <div class="card" style="width: 15rem;">    
              <img class="card-img-top" src="${j[i].image}" alt="Card image cap" with="200px" height="300px">
              <div class="card-body">
                  <h5 class="card-title">${j[i].title}</h5>
                  <p class="card-subtitle mb-2 text-muted">Precio: ${j[i].price}$</p>
                  <h5 class="card-title">${j[i].category}</h5>


                  <button onclick="" class="btn btn-primary"> Ver </button>
                  <a href="#" class="btn btn-primary">Comprar</a>
              </div>
          </div> 
      </div> 
      `;
  }
}

// Capa electronics
//  Electronics
document.getElementById("electronica").addEventListener("click", function () {
  $('#boton1').hide();
  $('#boton2').hide();
  $('#tramitar').hide();

  document.getElementById("contenedor").innerHTML = "";
  document.getElementById("categorias").innerHTML = "";
  
  muestraCategoria(categoria1);
});

// Categoria joya
fetch('https://fakestoreapi.com/products/category/jewelery')
  .then(res => res.json())
  .then(json => categoria2 = json)
function muestraCategoria(j) {
  for (i = 0; i < j.length; i++) {
    contenedor.innerHTML += `
      <div class="col-2">
          <div class="card" style="width: 15rem;">    
              <img class="card-img-top" src="${j[i].image}" alt="Card image cap" with="200px" height="300px">
              <div class="card-body">
                  <h5 class="card-title">${j[i].title}</h5>
                  <p class="card-subtitle mb-2 text-muted">Precio: ${j[i].price}$</p>
                  <h5 class="card-title">${j[i].category}</h5>

                  <button onclick="" class="btn btn-primary"> Ver </button>
                  <a href="#" class="btn btn-primary">Comprar</a>
              </div>
          </div> 
      </div> 
      `;
  }
}

// Capa joya
//  joyas
document.getElementById("joyas").addEventListener("click", function () {
  $('#boton1').hide();
  $('#boton2').hide();
  $('#tramitar').hide();
  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  muestraCategoria(categoria2);
});


// Categoria hombre
fetch("https://fakestoreapi.com/products/category/men's clothing")
  .then(res => res.json())
  .then(json => categoria3= json)
function muestraCategoria(j) {
  for (i = 0; i < j.length; i++) {
    contenedor.innerHTML += `
      <div class="col-2">
          <div class="card" style="width: 15rem;">    
              <img class="card-img-top" src="${j[i].image}" alt="Card image cap" with="200px" height="300px">
              <div class="card-body">
                  <h5 class="card-title">${j[i].title}</h5>
                  <p class="card-subtitle mb-2 text-muted">Precio: ${j[i].price}$</p>
                  <h5 class="card-title">${j[i].category}</h5>

                  <button onclick="" class="btn btn-primary"> Ver </button>
                  <a href="#" class="btn btn-primary">Comprar</a>
              </div>
          </div> 
      </div> 
      `;
  }
}

// Capa hombre
document.getElementById("hombre").addEventListener("click", function () {
  $('#boton1').hide();
  $('#boton2').hide();
  $('#tramitar').hide();
  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  muestraCategoria(categoria3);
});

// Categoria mujer
fetch("https://fakestoreapi.com/products/category/women's clothing")
  .then(res => res.json())
  .then(json => categoria4= json)
function muestraCategoria(j) {
  for (i = 0; i < j.length; i++) {
    contenedor.innerHTML += `
      <div class="col-2">
          <div class="card" style="width: 15rem;">    
              <img class="card-img-top" src="${j[i].image}" alt="Card image cap" with="200px" height="300px">
              <div class="card-body">
                  <h5 class="card-title">${j[i].title}</h5>
                  <p class="card-subtitle mb-2 text-muted">Precio: ${j[i].price}$</p>
                  <h5 class="card-title">${j[i].category}</h5>

                  <button onclick="" class="btn btn-primary"> Ver </button>
                  <a href="#" class="btn btn-primary">Comprar</a>
              </div>
          </div> 
      </div> 
      `;
  }
}

// Capa mujer
document.getElementById("mujer").addEventListener("click", function () {
  $('#boton1').hide();
  $('#boton2').hide();
  $('#tramitar').hide();
  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  muestraCategoria(categoria4);
});

 // carrito

 function tramitarPedido(){
  alert("Pedido en tramite");
 }
function showcarrito(){
  let carro;
  // recorrer el carro.products con foreach cada recorrido llamar al servicio de mostrar producto por id 
  fetch('https://fakestoreapi.com/carts/5')
            .then(res=>res.json())
            .then(json=>{

              carro=json
              document.getElementById("contenedor").innerHTML = "";
              carro.products.forEach((product) => {
                fetch('https://fakestoreapi.com/products/'+product.productId)
                .then(res=>res.json())
                .then(json=>{
                  document.getElementById("contenedor").innerHTML += `
                  
                  <div class="col-2">
                  <div class="card" style="width: 15rem;">    
                      <img class="card-img-top" src="${json.image}" alt="Card image cap" with="100px" height="200px">
                      <div class="card-body">
                          <h5 class="card-title">${json.title}</h5>
                          <p class="card-subtitle mb-2 text-muted">Precio: ${json.price}$</p>
                          <p class="card-subtitle mb-2 text-muted">Cantidad:1</p>
                          <h5 class="card-title">${json.category}</h5>
                          

                      </div>
                  </div> 
              </div> 
                </div>
                <br>

        `;
                })
            
            });
              
            })
            
}


// capa carrito
document.getElementById("carrito").addEventListener("click", function () {
  $('#boton1').hide();
  $('#boton2').hide();
  $('#tramitar').show();
  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  showcarrito();
});


function comprueba(j){
  let salir=true;
  let i=0;
  const usuario=document.getElementById("exampleInputEmail1").value;
  const clave=document.getElementById("exampleInputPassword1").value;
  // console.log(usuario)
  // console.log(clave)
  while(i<j.length&&salir){
    if(j[i].username==usuario &&j[i].password==clave )
      salir=false;
      i++;
    
  }
  // si salir es falso entonces sino Usuario incorrecto
  alert(salir==false?"Te has logueado en LozShop":"Usuario incorrecto");
}



async function login(){
  await fetch('https://fakestoreapi.com/users')
  .then(res=>res.json())
  .then(json=>{comprueba(json);console.log(json)})
}



// capa login
document.getElementById("login").addEventListener("click", function () {
  $('#boton1').hide();
  $('#boton2').hide();
  $('#tramitar').hide();
  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  login2();
});
function login2(){
  document.getElementById("contenedor").innerHTML = "";
  document.getElementById("contenedor").innerHTML += `
    
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">User</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter User">
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Recordar</label>
  </div>
  <a href="#" onclick='login()' class="btn btn-primary">Submit</a>
</form>

      
        
        `;
  

}

function register(){
  fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:document.getElementById("inputEmail4").value,
                    username:'johnd',
                    password:document.getElementById("inputPassword4").value,
                    name:{
                        firstname:document.getElementById("inputAddress").value,
                        lastname:document.getElementById("inputAddress2").value,
                    },
                    address:{
                        city:document.getElementById("inputCity").value,
                        street:'7835 new road',
                        number:3,
                        zipcode:document.getElementById("inputZip").value,
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

  alert("Te has registrado en LozShop");
}
// capa register
document.getElementById("registro").addEventListener("click", function () {
  $('#boton1').hide();
  $('#boton2').hide();
  $('#tramitar').hide();
  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  registro();
});

function registro(){
  document.getElementById("contenedor").innerHTML = "";
  document.getElementById("contenedor").innerHTML += `
    
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Nombre</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="nombre">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Apellidos</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="apellidos">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">

      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Recordar
      </label>
    </div>
  </div>
  <a href="#" onclick='register()' type="submit" class="btn btn-primary">Sign in</a>
</form>
<br><br><br>
      
        
        `;
  

}





// Scroll infinito
$(window).scroll(function () {
  console.log($(window).scrollTop());
  if (
    $(window).scrollTop() + $(window).height() >=
    $(document).height() - 100
  ) {
    nproductos = nproductos + 8;
    alert("Esta cargando los productos espere porfavor");

    console.log("scroll productos " + nproductos);

    traerProductos();
  }
});