validarEstructura = function (placaValidarse) {
    let longitud = placaValidarse.length;
    let placaDigitoUno = esMayuscula(placaValidarse[0]);
    let placaDigitoDos = esMayuscula(placaValidarse[1]);
    let placaDigitoTres = esMayuscula(placaValidarse[2]);
    let placaGuion = esGuion(placaValidarse[3]);
    let placaDigito4 = esDigito(placaValidarse[4]);
    let placaDigito5 = esDigito(placaValidarse[5]);
    let placaDigito6 = esDigito(placaValidarse[6]);

    if (!(longitud == 7 || longitud == 8)) {
        errores = "La placa deber tener entre 7 y 8 caracteres";
        return errores;
    }
    if (!(placaDigitoUno && placaDigitoDos && placaDigitoTres)) {
        errores = "Las primeras TRES LETRAS deben ser MAYUSCULAS";
        return errores;
    }
    if (!placaGuion) {
        errores = "El cuarto caracter debe ser un Guion";
        return errores;
    }
    if (!(placaDigito4 && placaDigito5 && placaDigito6)) {
        errores = "El cuarto, quinto y sexto caracteres deben ser DÍGITOS";
        return errores;
    }
    if (longitud === 8 && !esDigito(placaValidarse[7])) {
        errores =
            "La longitud es de 8 asegurate que el ultimo digito sea un numero";
        return errores;
    }

    return null;
};
obtenerProvincia = function (placaValidarse) {
    let primeraLetra = placaValidarse.charAt(0);
    let errores;
    let provincia;
    if (primeraLetra === "w") {
        errores = "La primera letra no es mayúscula";
        return errores;
    } else if (primeraLetra === "A") {
        provincia = "Azuay";
    } else if (primeraLetra === "B") {
        provincia = "Bolívar";
    } else if (primeraLetra === "U") {
        provincia = "Cañar";
    } else if (primeraLetra === "C") {
        provincia = "Carchi";
    } else if (primeraLetra === "X") {
        provincia = "Cotopaxi";
    } else if (primeraLetra === "H") {
        provincia = "Chimborazo";
    } else if (primeraLetra === "O") {
        provincia = "El Oro";
    } else if (primeraLetra === "E") {
        provincia = "Esmeraldas";
    } else if (primeraLetra === "W") {
        provincia = "Galápagos";
    } else if (primeraLetra === "G") {
        provincia = "Guayas";
    } else if (primeraLetra === "I") {
        provincia = "Imbabura";
    } else if (primeraLetra === "L") {
        provincia = "Loja";
    } else if (primeraLetra === "R") {
        provincia = "Los Ríos";
    } else if (primeraLetra === "M") {
        provincia = "Manabí";
    } else if (primeraLetra === "V") {
        provincia = "Morona Santiago";
    } else if (primeraLetra === "N") {
        provincia = "Napo";
    } else if (primeraLetra === "S") {
        provincia = "Pastaza";
    } else if (primeraLetra === "P") {
        provincia = "Pichincha";
    } else if (primeraLetra === "K") {
        provincia = "Sucumbíos";
    } else if (primeraLetra === "Q") {
        provincia = "Orellana";
    } else if (primeraLetra === "T") {
        provincia = "Tungurahua";
    } else if (primeraLetra === "Z") {
        provincia = "Zamora Chinchipe";
    } else if (primeraLetra === "Y") {
        provincia = "Santa Elena";
    } else {
        errores = "Provincia no encontrada para la letra proporcionada";
    }
    return provincia;
};

obtenerTipoVehiculo = function(placaValidarse){
    let segundaLetra = placaValidarse.charAt(1);
    let tipoVehiculo;
    if (segundaLetra === "E") {
        tipoVehiculo = "GUBERNAMENTAL"
    } else if (segundaLetra === "X"){
        tipoVehiculo = "USO OFICIAL"
    } else if (segundaLetra === "S"){
        tipoVehiculo = "GOBIERNO PROVINCIAL"
    } else if (segundaLetra === "M"){
        tipoVehiculo = "MUNICIPAL"
    } else if (segundaLetra === "A" || segundaLetra === "Z") {
        tipoVehiculo = "COMERCIALES"
    } else {
        tipoVehiculo = "PARTICULAR"
    }
    return tipoVehiculo;
};

obtenerDiaPicoYPlaca = function(placa){
    let ultimoDigito = placa.charAt(6)
    //console.log(ultimoDigito);
    let dia;
    if(ultimoDigito == 1 || ultimoDigito == 2){
        dia = "LUNES";
    } else if (ultimoDigito == 3 || ultimoDigito == 4){
        dia = "MARTES";
    } else if(ultimoDigito == 5  || ultimoDigito == 6){
        dia = "MIERCOLES";
    } else if(ultimoDigito == 7 || ultimoDigito == 8){
        dia = "JUEVES";
    } else if(ultimoDigito == 9 || ultimoDigito == 0){
        dia = "VIERNES"
    };
    return dia;
};
