calcularTasaInteres = function (ingresoAnual) {
    let valorTasaInteres;
    if (ingresoAnual < 300000) {
        valorTasaInteres = 16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        valorTasaInteres = 15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 100000) {
        valorTasaInteres = 14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        valorTasaInteres = 13;
    } else if (ingresoAnual >= 2000000) {
        valorTasaInteres = 12;
    }
    return valorTasaInteres;
};

calcularCapacidadPago = function (edad, ingresos, egresos) {
    let capaciad;
    let capaciadPago;
    if (edad > 50) {
        capaciad = 0.3 * (ingresos - egresos);
        capaciadPago = capaciad - egresos;
    } else {
        capaciad = 0.4 * (ingresos - egresos);
        capaciadPago = capaciad - egresos;
    }
    return capaciadPago;
};

calcularDescuento = function (precio, cantidad) {
    let descuento;
    let valorFinal;
    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = 0.2;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 0.3;
    } else if (cantidad >= 12) {
        descuento = 0.4;
    }
    valorFinal = precio * cantidad * (1 - descuento);
    return valorFinal;
};

determinarColesterol = function (nivelColesterolUsuario) {
    let valorColesterol;
    if (nivelColesterolUsuario < 100) {
        valorColesterol = "Colesterol LDL: Óptimo (lo mejor para su salud)";
    } else if (nivelColesterolUsuario >= 100 && nivelColesterolUsuario < 130) {
        valorColesterol = "Colesterol LDL: Casi óptimo";
    } else if (nivelColesterolUsuario >= 130 && nivelColesterolUsuario < 160) {
        valorColesterol = "Colesterol LDL: Límite superior del rango normal";
    } else if (nivelColesterolUsuario >= 160 && nivelColesterolUsuario < 190) {
        valorColesterol = "Colesterol LDL: Alto";
    } else {
        valorColesterol = "Colesterol LDL: Muy alto";
    }
    return valorColesterol;
};

validarClave = function (clave) {
    let numCaracteres = clave.length;
    let valor = false;
    if (numCaracteres >= 8 && numCaracteres <= 16) {
        valor = true;
    }
    return valor;
};

esMayuscula = function (caracter) {
    let valorCaracter = caracter.charCodeAt(0);
    if (
        (valorCaracter >= 65 && valorCaracter <= 90) ||
        (valorCaracter >= 193 && valorCaracter <= 218)
    ) {
        return true;
    } else {
        return false;
    }
};

esMiniscula = function (caracter) {
    let valorCaracter = caracter.charCodeAt(0);
    if (
        (valorCaracter >= 97 && valorCaracter <= 122) ||
        (valorCaracter >= 225 && valorCaracter <= 252)
    ) {
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

darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica >= 90 || notaFisica >= 90 || notaGeometria >= 90) {
        return true
    } else {
        return false;
    }
};

otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica >= 90 || notaFisica >= 90) && notaGeometria >= 80) {
        return true
    } else {
        return false;
    }
};

dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica >= 90 || notaFisica >= 90 || notaGeometria >= 90) && notaFisica > notaMatematica) {
        return true;
    } else {
        return false;
    }
};
