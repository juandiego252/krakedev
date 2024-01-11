
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

recuperarTextoDiv = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.textContent;
    return valorIngresado;
}

recuperarIntDiv = function (idComponente) {
    let valorDiv = recuperarTextoDiv(idComponente);
    let valorEntero = parseInt(valorDiv);
    return valorEntero;
}

recuperarFloatDiv = function (idComponente) {
    let valorDiv = recuperarTextoDiv(idComponente);
    let valorFlotante = parseFloat(valorDiv);
    return valorFlotante;
}


mostrarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "block";
}

ocultarComponente = function(idComponente){
    document.getElementById(idComponente).style.display = "none";
}

deshabilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = true;
}

habilitarComponente = function(idComponente){
    document.getElementById(idComponente).disabled = false;
}
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