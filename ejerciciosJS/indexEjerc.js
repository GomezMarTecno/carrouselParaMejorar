

//primero recorro la lista con los arreglos

//creo una funcion que cree las listas

//creo una function q genere botones y se
//los agregue a a las cards y guarde los valores

//creo una funcion que me genere la lista el total
//al tocar el carrito




const section = document.getElementById("section")

let carrito = []

    frutas.forEach(producto =>{
        crearcard(producto)
    })

function crearcard(producto){
    
    let cardFrutas = document.createElement("article");
    cardFrutas.classList.add("cardList")
    cardFrutas.innerHTML=
    `<h2>${producto.nombre}</h2>
    <img src=${producto.img}>
    <p> precio: $${producto.precio}</p>
    `
    section.append(cardFrutas)


    let btn_Comprar = document.createElement("button")
    btn_Comprar.classList.add("btn_comprar")
    btn_Comprar.innerHTML=`Comprar`

    btnBUY=btn_Comprar
    cardFrutas.append(btnBUY)
    btnComprar(producto, btnBUY)

}


function btnComprar(producto, btnBUY){
  btnBUY.addEventListener(`click`, ()=>{
    carrito.push({
    id:producto.id,
    nombre:producto.nombre,
    precio: producto.precio
    })
    console.log(carrito)
 })
 
}

let total="";

const carritoCont = document.getElementById("carritoCont")
const headerCont = document.getElementById("headerCont")
const contProductos = document.getElementById("contProductos")
const footerProducts = document.getElementById("footerProducts")
const ul = document.getElementById("ul")
const vercarrito = document.getElementById("vercarrito")



vercarrito.addEventListener('click', ListadePedido)
//cada vez que toco la function
//me tiene que mostrar
//SI O SI
//total y header
//la lista va al final
function ListadePedido(){
    carritoCont.classList.toggle("active");
    
    ul.innerHTML = ""; // Borramos cualquier cosa que estaba en la lista antes

    // Iteramos sobre los productos en el carrito
    carrito.forEach(producto => {
        let lista = document.createElement("li");
        lista.innerHTML = `
            <p>${producto.nombre}</p> <p>${producto.precio}</p>
        `;
        lista.className="li"

        ul.append(lista);
    });

    totalDelPedido()
}


// vamos a general el total

function totalDelPedido(){
    total = carrito.reduce((accumulator, precios)=>{
        return accumulator + precios.precio
    },0)
    footerProducts.innerHTML=`
    <p> Total: $${total} </p>`
}


const span = document.getElementById("span")

span.addEventListener('click', ()=>{
    carritoCont.classList.toggle("active");
    
})



