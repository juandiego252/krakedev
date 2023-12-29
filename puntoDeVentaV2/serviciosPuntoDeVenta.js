calcularValorDescuento = function (monto, porcentajeDescuento) {
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    let valorTotal = monto - valorDescuento;
    return valorTotal;
};

calcularIVA = function (precioSinIVA) {
    let calcularIVA = (precioSinIVA * 12) / 100;
    let valorFinal = precioSinIVA + calcularIVA;
    return valorFinal.toFixed(2);
};

calcularSubtotal = function (precio, cantidad) {
    let totalPagar = precio * cantidad;
    return totalPagar;
};

calcularTotal = function (subtotal, descuento, iva) {
    iva = calcularIVA(subtotal);
    total = subtotal - descuento + iva;
    return total;
};

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let valorDescuento;
    if (cantidad < 3) {
        valorDescuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        valorDescuento = subtotal * 0.3;
    } else if (cantidad >= 6 && cantidad <= 11) {
        valorDescuento = subtotal * 0.4;
    } else if (cantidad >= 12) {
        valorDescuento = subtotal * 0.5;
    } else {
        return false;
    }
    return valorDescuento;
};

esProductoValido = function (idComponente, nombre) {
    let recuperarNombre = document.getElementById(idComponente);
    nombre = recuperarNombre.value;
    if (nombre.length > 10) {
        mostrarTextoEnCaja("txtProducto", "Nombre tiene mas de 10 caracteres");
    }
};

esCantidadValida = function (idComponente, cantidad) {
    let recuperar = document.getElementById(idComponente, cantidad);
    cantidad = recuperar.value;
    if (!cantidad >= 0 && cantidad <= 10) {
        mostrarTextoEnCaja("txtCantidad", "Numero no valido");
    } else if (isNaN(cantidad)) {
    } {
        mostrarTextoEnCaja("txtCantidad", "No es un numero");
    }
};
esPrecioValido = function (idComponente,precio) {
    let precioObtenido = document.getElementById(idComponente);
    precioObtenido = parseFloat(precio.value);
    if (!precio >= 0 && precio <= 50) {
        mostrarTextoEnCaja("txtCantidad", "Precio no valido");
    } 
};

