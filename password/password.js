
ejecutarValidacion = function () {
    let passRecuperada;
    passRecuperada = recuperarTexto("txtPassword");
    validarPassword(passRecuperada)
};

contarMayusculas = function (password) {
    let letra;
    let contadorMayusculas = 0;
    for (let i = 0; i < password.length; i++) {
        letra = password.charAt(i);
        if (esMayuscula(letra)) {
            contadorMayusculas++;
        }
    };

    if (contadorMayusculas >= 1) {
        return true
    }
    return false;
};

contarDigito = function (password) {
    let contadorDigitos = 0;
    for (let i = 0; i < password.length; i++) {
        if (esDigito(password[i])) {
            contadorDigitos++;
        }
    };
    if (contadorDigitos >= 1) {
        return true
    } else {
        return false;
    }
};

contarCaracter = function (password){
    let contadorCaracterEsp = 0;
    for (let i = 0; i < password.length; i++){
        if (esCaracter(password[i])) {
            contadorCaracterEsp++;
        }
    };

    if (contadorCaracterEsp >= 1) {
        return true;
    } else {
        return false;
    }
}

esCaracter = function (caracter){
    let valorCaracter = caracter.charAt(0);
    if (valorCaracter == '*' || valorCaracter == '-' || valorCaracter == '_' ) {
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

validarPassword = function (password) {
    let longitudPassword = password.length;
    if (longitudPassword < 8 || longitudPassword >= 16) {
        mostrarTexto("lblMensajesErrores", "La contraseña debe tener minimo 8 caracteres y un maximo de 16")
    } else if (!contarMayusculas(password)) {
        mostrarTexto("lblMensajesErrores", "La contraseña debe tener al menos una mayuscula")
    } else if (!contarDigito(password)) {
        mostrarTexto("lblMensajesErrores", "La contraseña debe tener al menos un digito")
    } else if (!contarCaracter(password)){
        mostrarTexto("lblMensajesErrores", "La contraseña debe tener al menos un caracter especial * - _")
    } else {
        mostrarTexto("lblMensajesErrores", "Contraseña Valida")
    }
};