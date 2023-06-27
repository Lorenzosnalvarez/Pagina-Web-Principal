function agregarAlCarrito(nombre, precio) {
    var carrito = document.getElementById('carrito');
    var nuevoProducto = document.createElement('div');
    nuevoProducto.innerHTML = nombre + ' - $' + precio.toFixed(2);
    carrito.appendChild(nuevoProducto);
  
    var totalElement = document.getElementById('total');
    var totalActual = parseFloat(totalElement.textContent);
    var nuevoTotal = totalActual + precio;
    totalElement.textContent = nuevoTotal.toFixed(2);
  }

  
