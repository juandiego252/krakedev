let valorAletorio;
let aleatoriosArray = [];

aleatorios = function () {
    let numAleatorios = parseInt(Math.random() * 100) + 1;
    return numAleatorios;
};

generarAleatorios = function () {
    let recuperarNumero = recuperarInt("txtNumero");
    if (!(recuperarNumero >= 5 && recuperarNumero <= 20)) {
        mostrarTexto("lblErrores", "El numero debe ser entre 5 y 20");
    } else {
        for (let i = 0; i < recuperarNumero; i++) {
            console.log('Valor del indice que se esta iterando' + ' ' + i);
            valorAletorio = aleatorios();
            aleatoriosArray.push(valorAletorio);
        };
        mostrarResultado(aleatoriosArray);
    }
};

mostrarResultado = function(arregloNumeros){
    let valores;
    let cmpTabla = document.getElementById("divTabla")
    let contenidoTabla = "<table><tr><th>VALORES</th></tr>";
    for(let i = 0; i < arregloNumeros.length; i++){
        valores = arregloNumeros[i];
        contenidoTabla+= "<tr><td>";
        contenidoTabla+=valores;
        contenidoTabla+= "</td></tr>";
    };
    contenidoTabla+= "</table>";
    cmpTabla.innerHTML = contenidoTabla;
};