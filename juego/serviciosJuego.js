obtenerAleatorio = function () {
    let aleatorio;
    aleatorio = (parseInt(Math.random() * 3)) + 1;
    return aleatorio;
};

generarElemento = function () {
    let obtenerRandomico = obtenerAleatorio();
    let valorJuego;
    if (obtenerRandomico === 1) {
        valorJuego = "Piedra";
        return valorJuego
    }
    if (obtenerRandomico === 2) {
        valorJuego = "Papel";
        return valorJuego
    }
    if (obtenerRandomico === 3) {
        valorJuego = "Tijera";
        return valorJuego
    }
};

determinarGanador = function (eleccionJugador1, eleccionJugador2) {

    if (eleccionJugador1 === eleccionJugador2) {
        return 0;
    }
    if ((eleccionJugador1 === "Piedra" && eleccionJugador2 === "Tijera") || (eleccionJugador1 === "Papel" && eleccionJugador2 === "Piedra") || (eleccionJugador1 === "Tijera" && eleccionJugador2 === "Papel")) {
        return 1;
    } else {
        return 2;
    }
};

generarRuta = function (nombre) {
    if (nombre === "Tijera") {
        return "./imagenes/tijera.png"
    } else if (nombre === "Papel") {
        return "./imagenes/papel.png"
    } else if (nombre === "Piedra") {
        return "./imagenes/piedra.png"
    }
};