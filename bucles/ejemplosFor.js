mostrarNumeros = function(){
    console.log("Antes del for");
    for (let i = 0; i< 4; i++){
        console.log(i);
    };
    console.log("Despues del for");
};
mostrarNumeros2 = function(){
    console.log("Antes del For");
    for(let i = 0; i <= 5; i++){
        console.log(i);
    };
};

mostrarPares = function(){
    console.log("Despues del for");
    for (let i = 2; i<=10; i+=2){
        console.log(i);
    };
};

mostrarInverso = function (){
    console.log("Antes del for");
    for(let i = 10; i>=0; i--){
        console.log(i);
    };
    console.log("Despues del for");
};

hackearNasa = function(){
    for (let i = 10; i<=100; i+=10){
        console.log("Hackeando nasa " + i);
    };
    console.log("Nasa Hackeada Xd");
};

mostrarImpares = function(){
    console.log("Antes del for");
    for(let i = 1; i <= 21; i+=2){
        console.log(i);
    };
    console.log("Despues del for");
};