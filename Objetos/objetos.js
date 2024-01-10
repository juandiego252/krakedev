probarAtributos = function(){
    let persona = {
        nombre : "Juan",
        apellido : "Lopez",
        edad : 12,
        vivo : true
    }
    console.log(persona.nombre);
    if (persona.vivo == false) {
        console.log('No esta vivo');
    } else {
        console.log('Si esta vivo');
    }
};

crearProducto = function(){
    let producto1 = {
        nombre : "Juego EA-FC24",
        precio : 27.99,
        stock : 1,
    }

    let producto2 = {
        nombre: "Mouse Logitech",
        precio: 32.75,
        stock: 2,
    }


    console.log(producto1.nombre);
    console.log(producto1.precio);
    console.log(producto1.stock);

    console.log(producto2.nombre);
    console.log(producto2.precio);
    console.log(producto2.stock);

    if (producto1.stock > producto2.stock) {
        console.log("Producto 1 tiene mayor stock al producto 2");
    } else if (producto2.stock > producto1.stock) {
        console.log("Producto 2 tiene mayor stock al producto 1");
    } else if (producto1.stock == producto2.stock) {
        console.log("Ambos producto tienene el mismo stock");
    }
};