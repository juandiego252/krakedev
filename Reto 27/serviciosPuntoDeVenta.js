calcularValorDescuento = function (monto, porcentajeDescuento){
    let valorDescuento = (monto * porcentajeDescuento) / 100;
    let valorTotal = monto - valorDescuento;
    return valorTotal;
};

calcularIVA = function(precioSinIVA){
    let calcularIVA = (precioSinIVA * 12)/100;
    let valorFinal = precioSinIVA + calcularIVA;
    return valorFinal;
};

calcularSubtotal = function(precio,cantidad){
    let totalPagar = precio * cantidad;
    return totalPagar;
};

calcularTotal = function(subtotal,descuento,iva){
    let total = (subtotal - descuento + iva);
    return total;
};

