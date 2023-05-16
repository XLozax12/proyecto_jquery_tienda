indice();
document.addEventListener("DOMContentLoaded", traerProductos);
const contenedor = document.querySelector("#contenedor");
let respuesta;
let nproductos=8;


// traer los productos
async function traerProductos() {
  console.log("traer prodcutoss " + nproductos);
  const url = "https://fakestoreapi.com/products?limit="+nproductos;

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
    contenedor.innerHTML += `
    <div class="col-3">
        <div class="card" style="width: 18rem;">    
  <img class="card-img-top" src="${image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-subtitle mb-2 text-muted">Precio: ${price}</p>

    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>
</div>      
</div>      
        
        `;
  });
      
}

// Categorias
// en vez de desc pongo asc pa mostrar ascendente
fetch("https://fakestoreapi.com/products/categories?sort=asc")
  .then((res) => res.json())
  .then((json) => (categoriasjson = json));

function muestraCategorias(j) {
  for (i = 0; i < j.length; i++) {
    // $("#contenedor").append(j[i]);
    $("#list").append("<li><h3>" + j[i] + "</h3></li>");
  }
}

// capas

document.getElementById("indice").addEventListener("click", indice);

function indice() {
  document.getElementById("categorias").style.display="none";
  document.getElementById("contenedor").innerHTML =
    "<h1>Soy la empresa de lozashop</h1>";
}
// productos
document.getElementById("Productos").addEventListener("click", function () {
  pintarProductos(respuesta);
});

// categorias
document.getElementById("Categorias").addEventListener("click", function () {
  document.getElementById("contenedor").innerHTML = "";
  document.getElementById("categorias").style.display="block";

  // limpiarBody();
  // console.log(categoriasjson);
  muestraCategorias(categoriasjson);
});

// Scroll infinito
$(window).scroll(function () {
  console.log($(window).scrollTop());
  if (
    $(window).scrollTop() + $(window).height() >=
    $(document).height() - 100
  ) {
    nproductos=nproductos+8;
    alert("Esta cargando los productos espere porfavor");
    
    console.log("scroll productos " + nproductos);

   traerProductos();
  }
});
