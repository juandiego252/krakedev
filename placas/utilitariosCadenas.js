esMayuscula = function (caracter) {
    codigoAscii = caracter.charCodeAt(0);
    if ((codigoAscii >= 65 && codigoAscii <= 90)) {
        return true;
    } else {
        return false;
    }
};
esDigito = function (caracter) {
    let valorCaracter = caracter.charCodeAt(0);
    if (valorCaracter >= 48 && valorCaracter <= 57) {
        return true;
    } else {
        return false;
    }
};

esGuion = function(caracter){
    let valorCaracter = caracter.charCodeAt(0);
    if (valorCaracter == 45) {
        return true;
    } else {
        return false;
    }
};

validarEstructura = function(placaValidar){
    let longitud = placaValidar.length;
    let validarPrimerCaracter = esMayuscula(placaValidar);
    if (!(longitud >= 7 && longitud <=8)) {
        return "la placa debe tener 7 u 8 caracteres";
    }
};























recurperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
};

recuperarInt = function (idComponente) {
    let valorCaja = recurperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
};

recuperarFloat = function (idComponente) {
    let valorCaja = recurperarTexto(idComponente);
    let valorDecimal = parseFloat(valorCaja);
    return valorDecimal;
};

mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
};

mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
};

mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
};
