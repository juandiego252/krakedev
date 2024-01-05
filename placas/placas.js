validarPlaca = function(){
    let placaUser = document.getElementById("txtPlaca");
    let valorPlaca = placaUser.value;
    let erroresEstructura = validarEstructura(valorPlaca);
    let valorProvincia;
    let valorTipoVehiculo;
    let diaPicoYPlaca;
    let aux = document.getElementById("lblError1");
    let aux2 = document.getElementById("lblValida");
    let aux3 = document.getElementById("lblProvincia");
    let aux4 = document.getElementById("lblTipo");
    let aux5 = document.getElementById("lblPico")
    aux2.innerText = "";
    if (erroresEstructura == null) {

        aux2.innerText = 'ESTRUCTURA VALIDA'
        valorProvincia = obtenerProvincia(valorPlaca);
        valorTipoVehiculo = obtenerTipoVehiculo(valorPlaca);
        diaPicoYPlaca = obtenerDiaPicoYPlaca(valorPlaca);

        if (valorProvincia !== null) {
            aux3.innerText = 'PROVINCIA' + "  " + valorProvincia.toUpperCase();
            aux4.innerText = 'TIPO ' + valorTipoVehiculo;
            aux5.innerText = 'PICO Y PLACA' + "  " + diaPicoYPlaca;
        } else {
            aux3.innerText = 'PROVINCIA NO ENCONTRADA';
        }
    } else {
        aux.innerText = 'ESTRUCTURA INCORRECTA' + ' ' + erroresEstructura;
    }
};

limpiar = function (){
    document.getElementById("txtPlaca").value = '';
    document.getElementById("lblError1").innerText = '';
    document.getElementById("lblValida").innerText = '';
}