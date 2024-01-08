ejecutarPrueba1 = function () {
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje)

};

ejecutarPrueba2 = function(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    invertirCadena(mensaje);
};

recorrerCadena = function (cadena) {
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caarcter " + " " + caracter + " " + "Posicion " + " " + " " + posicion);
    };
};

invertirCadena = function (cadena) {
    let cadenaInvertida = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        cadenaInvertida += cadena.charAt(posicion);
        mostrarTexto("lblCadena", cadenaInvertida);
        console.log(cadenaInvertida);
    };
};

