let clientes = [
    {
        cedula: "12345",
        nombre: "Juan",
        edad: 20,
    },
    {
        cedula: "17645",
        nombre: "Pepe",
        edad: 22,
    },
    {
        cedula: "12245",
        nombre: "Fernando",
        edad: 18,
    },
];

modificarCliente = function (cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
};

guardarCambios = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let clienteNuevo = {};
    clienteNuevo.cedula = valorCedula;
    clienteNuevo.nombre = valorNombre;
    clienteNuevo.edad = valorEdad;
    modificarCliente(clienteNuevo);
    mostrarClientes();
};

ejecutarBusqueda = function () {
    let valorTexto = recuperarTexto("txtBuscarCedula");
    let respuesta = buscarCliente(valorTexto);
    if (respuesta !== null) {
        alert("Cliente encontrado");

    } else {
        mostrarTextoEnCaja("txtBuscarCedula", "No encontrado !");
    }
};

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;

    agregarCliente(nuevoCliente);
};

agregarCliente = function (cliente) {
    let resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("Cliente Agregado !");
        mostrarClientes();
    } else {
        alert(`ya existe un cliente con la cedula ${cliente.cedula}`);
    }
};

buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
};

mostrarClientes = function () {
    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla =
        "<table><tr>" + "<th>CEDULA</th>" + "<th>Nombre</th>" + "<th>edad</th>";
    let elementoClientes;
    for (let i = 0; i < clientes.length; i++) {
        elementoClientes = clientes[i];
        contenidoTabla +=
            "<tr><td>" +
            elementoClientes.cedula +
            "</td>" +
            "<td>" +
            elementoClientes.nombre +
            "</td>" +
            "<td>" +
            elementoClientes.edad +
            "</td>" +
            "</tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
};
