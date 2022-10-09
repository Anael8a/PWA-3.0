//Funcion normal que regresa una promesa
//pero el resultado se obtiene mas lento
function fcnSumarLento(numero){
    /*Var promesa = new Promise(function(resolve, reject){
    });
    return promesa;*/
    return new Promise(function(resolve, reject){
        /*if(numero >= 5){
            reject('Sumar lento Fallo');
        }*/

        setTimeout(function(){
            resolve(numero + 1);
        }, 800);
    });
}

//Esta es la manera mas optimizada de definir
//una funcion pero de tipo arrow (flecha) que
// tambien regresa una promesa pero el resultado
//se obtiene mas rapido.
let fcnSumaRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero + 1);
        }, 300);
    });
}


///LLAMADO NORMAL DE LAS FUNCIONES
//Funcion sumar lento
/*fcnSumarLento(5)
.then(respuesta=>{
    console.log('Respuesta Lenta:', respuesta);
});

///Funcion sumar Rapido
fcnSumaRapido(10)
.then(respuesta=>{
    console.log('Respuesta Rapida:', respuesta);
})
.catch(error){
    console.log('Respuestas:', respuesta);
};*/

//Llamado para las 2 funciones y sus respectivas promesas 
//al mismo tiempo.
/*Promise.all([fcnSumarLento(5), fcnSumaRapido(10)])
.then(respuestas =>{
    console.log('Respuestas:', respuestaas);
})
.catch(error=>{
console.log("Error en todas las promesas: ", error);
});*/
let arregloVarios = [fcnSumarLento(5), fcnSumaRapido(10),true, 'Hola mundo'];

Promise.all(arregloVarios)
.then(respuestas =>{
    console.log('Respuestas:', respuestas);
})
.catch(error=>{
console.log("Error en todas las promesas: ", error);
});