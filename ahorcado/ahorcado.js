let palabraSecretaGlobla;
let globalIntentos = 0;
let coincidencias = 0;
let errores = 0;

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
     }
     if (letrasEncontradas === 0) {
        alert('Letra' + " " + letraValidar + "  " +'no encontrada')
        errores++;
        mostrarAhorcado();
     };
};

ingresarLetra = function(){
    let letraCajaTexto = recuperarTexto("txtLetra");
    if (esMayuscula(letraCajaTexto)) {
        validar(letraCajaTexto);
        coincidencias++;
        if (coincidencias === 5) {
            mostrarImagen("ahorcadoImagen","ganador.gif");
        }
    } else {
        mostrarTexto("lblErroresValidar","Solo se aceptan mayusculas")
    }
    globalIntentos++;
    if (globalIntentos === 10) {
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
    }
};

mostrarAhorcado = function(){
    if (errores === 1) {
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png")
    } else if (errores === 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png")
    } else if (errores === 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png")
    } else if (errores === 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png")
    } else if (errores === 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png")
    } else if (errores === 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png")
    } else if (errores === 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png")
    } else if (errores === 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png")
    } else if (errores === 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png")
    }
};