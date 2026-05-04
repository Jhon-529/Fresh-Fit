let carrito = [];

function agregar(nombre, precio, imagen) {
  let producto = carrito.find(item => item.nombre === nombre);
  if (producto) {
    producto.cantidad++;
  } else {
    carrito.push({ nombre, precio, imagen, cantidad: 1 });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  let lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio * item.cantidad;
    lista.innerHTML += `<div class="carrito-item"><img src="${item.imagen}"><div><p>${item.nombre}</p><small>S/ ${item.precio} x ${item.cantidad}</small><div><button onclick="sumar(${index})">+</button><button onclick="restar(${index})">-</button><button onclick="eliminar(${index})">❌</button></div></div></div>`;
  });
  document.getElementById("contador").textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("cantidad").textContent = carrito.length;
}

function sumar(indice) { carrito[indice].cantidad++; actualizarCarrito(); }

function restar(indice) {
  if (carrito[indice].cantidad > 1) { carrito[indice].cantidad--; }
  else { carrito.splice(indice, 1); }
  actualizarCarrito();
}

function eliminar(indice) { carrito.splice(indice, 1); actualizarCarrito(); }

function toggleCarrito() {
  document.getElementById("overlay-carrito").classList.toggle("active");
}

document.getElementById("overlay-carrito").addEventListener("click", function(e) {
  if (e.target === this) toggleCarrito();
});

function checkout() { alert("Gracias por tu compra"); }
