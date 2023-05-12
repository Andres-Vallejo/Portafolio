function calcularPrecio() {
  var precioBase = parseFloat(document.getElementById('precioBase').value);
  var descuento = parseFloat(document.getElementById('descuento').value);
  
  var resultado = document.getElementById('resultado');
  
  if (precioBase <= 0 || descuento <= 0) {
    resultado.textContent = "Los valores ingresados son invalidos";
    return;
  }

  if (descuento === 0) {
    resultado.textContent = "El precio final con descuento es $" + precioBase.toFixed(2);
  } else if (descuento > 0 && descuento <= 99) {
    var precioFinal = calcularPrecioConDescuento(precioBase, descuento);
    resultado.textContent = "El precio final con descuento es $" + precioFinal.toFixed(2);
  } else {
    resultado.textContent = "El valor de descuento ingresado es invalido";
  }
}

function calcularPrecioConDescuento(precioBase, descuento) {
  var precioFinal = precioBase - (precioBase * (descuento / 100));
  return precioFinal;
}
