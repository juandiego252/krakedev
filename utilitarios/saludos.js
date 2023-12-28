
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
  let edad = recuperarInt("txtEdad");
  let estatura = recuperarFloat("txtEstatura");
  console.log(edad);
  console.log(estatura);
};

recuperarInt = function (idComponente){
    let valorCaja = recurperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;

};

recuperarFloat = function (idComponente) {
  let valorCaja = recurperarTexto(idComponente);
  let valorDecimal = parseFloat(valorCaja);
  return valorDecimal;
};