////imagen de la pagina
let img1 = document.getElementById("IdImg1");
let img2 = document.getElementById("IdImg2");

//codigo
fetch('images/MazingerZ-1.png')
.then(resp => resp.blob())
.then(image => {
    console.log(image);
    //instancia para imagen 1
    var imgPath1 = URL.createObjectURL(image);
    img1.src = imgPath1;
});
//Fetch con codigo de promesa normal.
fetch('images/MazingerZ-2.png')
.then(resp => {
    return resp.blob();
})
.then(image => {
    console.log(image);
    //instancia para imagen 2
    var imgPath2 = URL.createObjectURL(image);
    img2.src = imgPath2;
});
