let puntosUsuarios = 0;
let puntosComputador = 0;



jugar = function(seleccionado){
    let resultadoComputadora = generarElemento();
    let rutaComputadora = generarRuta(resultadoComputadora);
    let resultado = determinarGanador(resultadoComputadora,seleccionado);

    if (resultado === 0) {
        mostrarTexto("lblResultado", "EMPATE");
    } else if (resultado === 1) {
        mostrarTexto("lblResultado", "PERDISTE");
        puntosComputador+=1;
        mostrarTexto("lblPuntosComputador", puntosComputador);
        if (puntosComputador === 5) {
            mostrarTexto("lblResultado", "COMPUTADOR TE HA VENCIDO");
        }
    } else if (resultado === 2){
        mostrarTexto("lblResultado", "GANASTE");
        puntosUsuarios+=1;
        mostrarTexto("lblPuntosUsuario",puntosUsuarios);
        if (puntosUsuarios === 5) {
            mostrarTexto("lblResultado", "GANASTE LA PARTIDA");
        }
    };
    mostrarImagen("imgComputador",rutaComputadora);
};

limpiar = function(){
    puntosUsuarios = 0;
    puntosComputador = 0;
    mostrarTexto("lblResultado","");
    mostrarTexto("lblPuntosComputador",0);
    mostrarTexto("lblPuntosUsuario",0);
    mostrarImagen("imgComputador","");

    
};