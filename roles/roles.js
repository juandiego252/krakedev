let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1755014238", nombre: "Juan", apellido: "Cordova", sueldo: 143.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    // Deshabilitar las cajas de texto
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
};

mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
};

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
};

mostrarEmpleados = function () {
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" + "<th>CEDULA</th>" + "<th>NOMBRE</th>" + "<th>APELLIDO</th>" + "<th>SUELDO</th>" + "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla += "<tr><td>" + elementoEmpleado.cedula + "</td>" +
            "<td>" + elementoEmpleado.nombre + "</td>" +
            "<td>" + elementoEmpleado.apellido + "</td>" +
            "<td>" + elementoEmpleado.sueldo + "</td></tr>";
    };
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
};

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
};

buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    };
    return empleadoEncontrado;
};

agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
};

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarTexto("txtSueldo");
    let sueldoFlotante = parseFloat(valorSueldo);

    // Validar si todos los campos son obligatorios
    if (valorCedula.length === 0 || valorNombre.length === 0 || valorApellido.length === 0 || valorSueldo.length === 0) {
        alert('Todos los campos son obligatorios');
        return false;
    }

    // Validar Cedula
    if (valorCedula.length !== 10) {
        alert('La cedula debe tener 10 caracteres');
        return false;
    }

    for (let i = 0; i < valorCedula.length; i++) {
        if (!esDigito(valorCedula[i])) {
            alert('La cedula debe tener solo digitos');
            return false;
        }
    }

    // Validar Nombre
    if (valorNombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        return false;
    }

    for (let i = 0; i < valorNombre.length; i++) {
        if (!esMayuscula(valorNombre[i])) {
            alert('Todos los caracteres del nombre deben ser Mayusculas');
            return false;
        }
    }

    // Validar Apellido
    if (valorApellido.length < 3) {
        alert('El apellido debe tener al menos 3 caracteres');
        return false;
    }

    for (let i = 0; i < valorApellido.length; i++) {
        if (!esMayuscula(valorApellido[i])) {
            alert('Todos los caracteres del apellido deben ser Mayusculas');
            return false;
        }
    }

    // Validar Sueldo
    if (sueldoFlotante < 400 || sueldoFlotante > 5000 || isNaN(sueldoFlotante)) {
        alert('El sueldo debe estar entre 400 y 5000 y debe ser un numero valido');
        return false;
    }

    // Si llega hasta aquí, todos los campos son válidos
    let empleado = {
        cedula: valorCedula,
        nombre: valorNombre,
        apellido: valorApellido,
        sueldo: valorSueldo
    };

    if (esNuevo) {
        let nuevoEmpleado = agregarEmpleado(empleado);
        if (nuevoEmpleado) {
            alert('EMPLEADO GUARDADO CORRECTAMENTE');
            mostrarOpcionEmpleado();
            mostrarEmpleados();
            esNuevo = false;
        } else {
            alert('Ya existe un empleado con la cedula ' + empleado.cedula);
        }
    } else {
        let editarEmpleado = buscarEmpleado(empleado.cedula);
        if (editarEmpleado) {
            // Validar los campos antes de modificar
            let nuevoNombre = recuperarTexto("txtNombre");
            let nuevoApellido = recuperarTexto("txtApellido");
            let nuevoSueldo = recuperarTexto("txtSueldo");

            if (nuevoNombre && nuevoApellido && nuevoSueldo) {
                editarEmpleado.nombre = nuevoNombre;
                editarEmpleado.apellido = nuevoApellido;
                editarEmpleado.sueldo = nuevoSueldo;
                alert('EMPLEADO MODIFICADO EXITOSAMENTE');
                mostrarEmpleados();
            } else {
                alert('Los campos deben contener valores válidos');
            }
        } else {
            alert('No se encontró un empleado con la cedula ' + empleado.cedula);
        }
    }

    return true;
};

ejcutarBusqueda = function () {
    let valorCedulaBusqueda = recuperarTexto("txtBusquedaCedula");
    let encontrarEmpleado = buscarEmpleado(valorCedulaBusqueda);
    if (encontrarEmpleado == null) {
        alert('Empleado no Existe')
    } else {
        mostrarTextoEnCaja("txtCedula", encontrarEmpleado.cedula);
        mostrarTextoEnCaja("txtNombre", encontrarEmpleado.nombre);
        mostrarTextoEnCaja("txtApellido", encontrarEmpleado.apellido);
        mostrarTextoEnCaja("txtSueldo", encontrarEmpleado.sueldo);

        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
    }
};

limpiar = function (){
    // Obtener referencias a los campos de texto
    let txtCedula = document.getElementById("txtCedula");
    let txtNombre = document.getElementById("txtNombre");
    let txtApellido = document.getElementById("txtApellido");
    let txtSueldo = document.getElementById("txtSueldo");

    // Limpiar los valores de los campos
    txtCedula.value = "";
    txtNombre.value = "";
    txtApellido.value = "";
    txtSueldo.value = "";
};
