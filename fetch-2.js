/*fetch('https://reqres.in/api/users')
.then(resp=> {
    //console.log(resp);
    resp.json().then(console.log);
})*/



//funcion ideal
fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(respObj => {
    console.log(respObj);
    console.log(respObj.page);
    console.log(respObj.per_page);
    console.log(respObj.data);
});

