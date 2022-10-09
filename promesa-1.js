///Mi primer hola mundo
console.log('Hola mundo');

///creacion de funcion que recibe un numero y le suma uno
function fcnSumarUno(numero, fcnResultadoCallback){
    setTimeout(() => {
       //return numero +1; 
       fcnResultadoCallback(numero +1);
    }, 800);
    
}

///Para llamar la funcion
//let Resultado = fcnSumarUno(5);
fcnSumarUno(5, function(nuevoValor1){
    //console.log("Resultado: ", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        //console.log("Resultado:", nuevoValor2 )
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado:", nuevoValor3 )
        });
    });
});
///Imprimir dicho resultado
//console.log("Resultado: ", Resultado);


