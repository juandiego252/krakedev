recurperarTexto = function (idComponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;
  return valorIngresado;
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

mostrarImagen = function (idComponente, rutaImagen) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.src = rutaImagen;
};

mostrarTextoEnCaja = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.value = mensaje;
};
