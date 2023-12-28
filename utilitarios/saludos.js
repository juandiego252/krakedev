saludar = function () {
  let nombre = recurperarTexto("txtNombre");
  let apellido = recurperarTexto("txtApellido");
  let edad = recuperarInt("txtEdad");
  let estatura = recuperarFloat("txtEstatura");
  let mensajeBienvenida = "Bienvenido" + nombre + apellido;
  mostrarTexto("lblResultado", mensajeBienvenida);
  mostrarImagen("imgSaludo", "./images/pato.gif");
  mostrarTextoEnCaja("txtNombre", "Hola puse esto en caja");
};
