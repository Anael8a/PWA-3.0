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


let fcnSumaRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero + 1);
        }, 1000);
    });
}


///promise RACE
Promise.race([fcnSumarLento(5), fcnSumaRapido(10)])
    .then(respuesta => {
        console.log('Respuestas: ', respuesta);
    })
    .catch(error =>{
        console.log("Error en la respuesta de la promesa: ", error);
    });