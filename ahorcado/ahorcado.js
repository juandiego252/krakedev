let palabraSecretaGlobla;

esMayuscula = function (caracter) {
    codigoAscii = caracter.charCodeAt(0);
    if ((codigoAscii >= 65 && codigoAscii <= 90)) {
        return true;
    } else {
        return false;
    }
};

contarMayusculas = function (palabra) {
    let letra;
    let contadorMayusculas = 0;
    for (let i = 0; i < palabra.length; i++) {
        letra = palabra.charAt(i);
        if (esMayuscula(letra)) {
            contadorMayusculas++;
        }
    };

    if (contadorMayusculas == 5) {
        return true
    }
    return false;
};


guardarPalabra = function () {
    let palabraSecreta = recuperarTexto("txtSecreta");
    let longitudPalabraSecreta = palabraSecreta.length;
    if (longitudPalabraSecreta !== 5) {
        mostrarTexto("lblErrores", "Deebe tener exactamente 5 caracteres !");
    } else if (!contarMayusculas(palabraSecreta)) {
        mostrarTexto("lblErrores", "Todas las letras deben ser Mayusculas");
    } else {
        palabraSecretaGlobla = palabraSecreta;
        console.log(palabraSecretaGlobla);
    }
};

mostrarletra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra);
    } else if (posicion == 1) {
        mostrarTexto("div1", letra);
    } else if (posicion == 2) {
        mostrarTexto("div2", letra);
    } else if (posicion == 3) {
        mostrarTexto("div3", letra);
    } else if (posicion == 4) {
        mostrarTexto("div4", letra);
    }
};

validar = function (letraValidar) {
    let letrasEncontradas = 0;
    for (let i = 0; i < palabraSecretaGlobla.length; i++){
        if (palabraSecretaGlobla.charAt(i) === letraValidar) {
            mostrarletra(letraValidar,i);
            letrasEncontradas++;
        }
     };
};

ingresarLetra = function(){
    let letraCajaTexto = recuperarTexto("txtLetra");
    if (esMayuscula(letraCajaTexto)) {
        validar(letraCajaTexto);
    } else {
        mostrarTexto("lblErroresValidar","Solo se aceptan mayusculas")
    }
};