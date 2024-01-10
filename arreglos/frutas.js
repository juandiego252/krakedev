let frutas = ["pera","ambiente","manzana"];

buscar = function(fruta){
    let elemento;
    let frutaEncontrada = null;
    for(let i = 0; i < frutas.length; i++){
        elemento = frutas[i];
        if (fruta == elemento) {
            frutaEncontrada = fruta;
            break;
        }
    };

    return frutaEncontrada;
};

probrarBusqueda = function(){
    let capturarValor = recuperarTexto("txtFruta");
    let resultado = buscar(capturarValor);
    if (resultado == null) {
        alert('No existe la fruta')
    } else {
        alert('Fruta Encontrada');
    }
};

probarBucles = function (){
    let array =[1,2,3,4,2,3,2,1]
    console.log(array.length);
    array.push("A")
    array.push("B")
    array.push("C")
    array.push("D")
    array.push("E")
    console.log(array.length);

    let arr = [1,2,3,4,5]
    let ultimo = arr.length;
    console.log("El ultimo valor del array es " + arr[ultimo]);

    let arry = ["Manzana","Pera","Uva","Durazno","Aguacate"]

    
};


let arrayFrutas = ["Manzana","Pera","Uva","Durazno","Aguacate"];


probarArrays = function (valor){
    let index = -1;
    for(let i = 0; i <= arrayFrutas.length; i++){
        if (arrayFrutas[i] == valor) {
            index = i;
            break;
        }
    };
    return index;
};

boboa = function(){
    let valor = probarArrays('Frutilla');
    console.log(valor);
};
