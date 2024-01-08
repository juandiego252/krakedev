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

esGuion = function (caracter) {
    let valorCaracter = caracter.charCodeAt(0);
    if (valorCaracter == 45) {
        return true;
    } else {
        return false;
    }
};

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}