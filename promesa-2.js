///enviar a consola un "Hola mundo"
console.log("Hola mundo");
///funcion que recibe un numero y le suma uno.
function fcnSumaUno(numero, fcnResultadoCallBack){
    setTimeout(function(){
        //return numero +1
        fcnResultadoCallBack(numero + 1);
    }, 300);
}

function fcnSumarUno(numero){
    var promesa = new Promise(function(resolve, reject){
        if(numero => 7 ){
            reject('El numero ya es muy alto');
        }
        setTimeout(function(){
            resolve(numero + 1);
        },300);
    });
    return promesa;
}

///Llamado de la funcion y promesa
///de forma recursiva de manera encadenada.
/*fcnSumarUno(5).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado:", nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
});*/


/*////Llamado de la funcion y promesa
fcnSumaUno(5).then(function(nuevoNumero){
    console.log(nuevoNumero);
})*/

//Llamado de la funcion promesa
/*fcnSumarUno(5).then(nuevoNumero=>{
    console.log("Resultado:", nuevoNumero);
});*/

fcnSumarUno(5)
    .then(fcnSumarUno)
    .then(fcnSumarUno)
    .then(nuevoNumero=>{
        console.log("Resultado:", nuevoNumero);
    })
    .catch(error => {
        console.log('Error en la promesa', error);
    });