const sliderPadre = document.querySelector(".grande");
const sliderImages = document.querySelectorAll(".img");
let before = document.getElementById('before');
let next = document.getElementById('next');

let ejeInicial =0;
let maxIndice= sliderImages.length - 1; //5


function mostrarImg(){
    sliderPadre.style.transform = `translateX(-${ejeInicial * 37}%)`;
}

//seleccionar los eventos de escucha
//hacer una funcion que muestre la imagen y que le diga al
//slider imagen que se mueva en el eje x

//hacer una funcion que se mueva a la derehca
function imgNext(){
    ejeInicial = (ejeInicial + 1) % (maxIndice-1);
    mostrarImg();
}

//hacer una funcion que se mueva a la izquierda
function imgAnterior(){
    ejeInicial = (ejeInicial-1 + maxIndice +1)% (maxIndice +1);
    mostrarImg();
}

//llamo a los botones;

before.addEventListener('click', imgAnterior);
next.addEventListener('click', imgNext);

mostrarImg();