
recurperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
};
saludar = function () {
    let nombre = recurperarTexto("txtNombre");
    let apellido = recurperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    let mensajeBienvenida = "Bienvenido" + nombre + apellido;
    mostrarTexto("lblResultado", mensajeBienvenida);
    mostrarImagen("imgSaludo", "./images/pato.gif");
    mostrarTextoEnCaja("txtNombre", "Hola puse esto en caja")
};

recuperarInt = function (idComponente) {
    let valorCaja = recurperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;

};

recuperarFloat = function (idComponente) {
    let valorCaja = recurperarTexto(idComponente);
    let valorDecimal = parseFloat(valorCaja);
    return valorDecimal;
};

mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;

};

mostrarImagen = function(idComponente,rutaImagen){
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
};

mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
};