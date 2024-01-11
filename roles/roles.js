let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1755014238", nombre: "Juan", apellido: "Cordova", sueldo: 143.0 }
]

let roles = [
    { cedula: "", nombre: "", sueldo: 0.0, valorAPagar: 0.0, aporteEmpleado: 0.0, aporteEmpleador: 0.0 }
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
    mostrarRoles();
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

limpiar = function () {
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

buscarPorRol = function () {
    let valorCajaTexto = recuperarInt("txtBusquedaCedulaRol");
    console.log(valorCajaTexto);
    let empleado = buscarEmpleado(valorCajaTexto);
    console.log(empleado);

    if (empleado != null) {
        mostrarTexto("infoCedula", empleado.cedula);
        mostrarTexto("infoNombre", empleado.nombre);
        mostrarTexto("infoSueldo", empleado.sueldo);

    } else {
        alert('Empleado no existe')
    };
};

calcularAporteEmpleado = function (sueldo) {
    sueldo = sueldo * (9.45 / 100);
    return sueldo.toFixed(2);
};

calcularValorPagar = function (sueldo, iess, descuento) {
    let valorPagar = sueldo - iess - descuento;
    return valorPagar.toFixed(2);
};

calcularRol = function () {
    // Recuperar sueldo y descuentos de la pantalla
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuentos = recuperarFloat("txtDescuentos");

    /*
    if (isNaN(descuentos) || descuentos <= 0 || descuentos > sueldo) {
        alert('El valor de descuentos debe ser un número válido y estar entre 0 y el sueldo del empleado.');
        return;
    }
    */
    // Calcular aporte del empleado y mostrar en pantalla
    let aporteEmpleado = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS", aporteEmpleado);
    // Calcular valor a pagar y mostrar en pantalla
    let valorAPagar = calcularValorPagar(sueldo, aporteEmpleado, descuentos);
    mostrarTexto("infoPago", valorAPagar);
};

buscarRol = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < roles.length; i++) {
        elementoEmpleado = roles[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    };
    return empleadoEncontrado;
}

agregarRol = function (rol) {
    let resultado = buscarRol(rol.cedula);
    if (resultado == null) {
        roles.push(rol);
        return true;
    } else {
        return false;
    }
};

calcularAporteEmpleador = function (sueldo) {
    sueldo = sueldo * (11.5 / 100);
    return sueldo.toFixed(2);
};

guardarRol = function () {
    let nombre = recuperarTextoDiv("infoNombre");
    let cedula = recuperarTextoDiv("infoCedula")
    let sueldo = recuperarFloatDiv("infoSueldo");
    let aporteIess = recuperarFloatDiv("infoIESS");
    let totalAPagar = recuperarFloatDiv("infoPago");

    let resultadoAporteEmpleador = calcularAporteEmpleador(sueldo);

    // Crear un nuevo objeto para cada rol
    let nuevoRol = {
        cedula: cedula,
        nombre: nombre,
        sueldo: sueldo,
        aporteEmpleado: aporteIess,
        valorAPagar: totalAPagar,
        aporteEmpleador: resultadoAporteEmpleador
    };

    // Agregar el nuevo rol al array de roles
    let result = agregarRol(nuevoRol);

    if (result) {
        console.log(nuevoRol);
        alert('Rol guardado con éxito!');
    } else {
        alert('No se pudo guardar el rol');
    }




};

mostrarRoles = function () {
    let cmpTabla = document.getElementById("tablaResumen");
    let contenidoTabla = "<table><tr>" + "<th>CEDULA</th>" + "<th>NOMBRE</th>" + "<th>VALOR A PAGAR</th>" + "<th>APORTE EMPLEADO</th>" + "<th>APORTE EMPLEADOR</th>" + "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < roles.length; i++) {
        elementoEmpleado = roles[i];
        contenidoTabla += "<tr><td>" + elementoEmpleado.cedula + "</td>" +
            "<td>" + elementoEmpleado.nombre + "</td>" +
            "<td>" + elementoEmpleado.valorAPagar + "</td>" +
            "<td>" + elementoEmpleado.aporteEmpleado + "</td>" +
            "<td>" + elementoEmpleado.aporteEmpleador + "</td></tr>";
    };
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
};


mostrarTotales = function () {
    let totalEmpleado = 0;
    let totalEmpleador = 0;
    let totalAPagar = 0;

    for (let i = 0; i < roles.length; i++) {
        let elementoEmpleado = roles[i];
        totalEmpleado += elementoEmpleado.aporteEmpleado;
        totalEmpleador += elementoEmpleado.aporteEmpleador;
        totalAPagar += elementoEmpleado.valorAPagar;
    }

    mostrarTexto("infoTotalPago", totalAPagar.toFixed(2));
    mostrarTexto("infoAporteEmpresa", totalEmpleador.toFixed(2));
    mostrarTexto("infoAporteEmpleado", totalEmpleado.toFixed(2));
};