
recurperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
};
saludar = function () {
  let nombre = recurperarTexto("txtNombre");
  let apellido = recurperarTexto("txtApellido");
};