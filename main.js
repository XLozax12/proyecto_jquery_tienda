indice();
document.addEventListener("DOMContentLoaded", traerProductos);
const contenedor = document.querySelector("#contenedor");
let respuesta;
let nproductos = 8;

let carrito;
crearCarrito();

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
  console.log("traer prodcutoss " + nproductos);
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
  console.log(productos);

  productos.forEach((prod) => {
    const { id, title, price, image } = prod;
    document.getElementById("contenedor").innerHTML += `
    <div class="col-3">
        <div class="card" style="width: 18rem;">    
  <img class="card-img-top" src="${image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-subtitle mb-2 text-muted">Precio: ${price}</p>

    <a href="#" onclick='añadirCarrito(${id})' class="btn btn-primary add-to-cart">Añadir al carrito</a>
    
  </div>
</div>      
</div>      
        
        `;
  });

}

function añadirCarrito(id) {
  console.log(id);
  console.log(carrito);
  fetch('https://fakestoreapi.com/carts/' + carrito.id, {
    method: "PUT",
    body: JSON.stringify(
      {
        userId: 5,
        date: 2019 - 12 - 10,
        products: [{ productId: id, quantity: 1 }]
      }
    )
  })
    .then(res => res.json())
    .then(json => console.log(json))

}


// capas

document.getElementById("indice").addEventListener("click", indice);

function indice() {
  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  document.getElementById("contenedor").innerHTML =
    "<h1>Estas en el Inicio de la tienda</h1>";
}
// productos
document.getElementById("Productos").addEventListener("click", function () {
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
  // limpiarBody();
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

  document.getElementById("categorias").innerHTML = "";
  document.getElementById("contenedor").innerHTML = "";
  muestraCategoria(categoria2);
});




// carrito
document.getElementById("carrito").addEventListener("click", function () {
  document.getElementById("contenedor").innerHTML = "";
  document.getElementById("carrito").style.display = "block";
  fetch('https://fakestoreapi.com/carts')
    .then(res => res.json())
    .then(json => console.log(json))
});

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