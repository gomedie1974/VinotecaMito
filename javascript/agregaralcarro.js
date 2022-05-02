// Compra de Productos 
/* let total = 0;
let cantidad = 0;
function comprar() {
    const iva = 1.21;
    let ivaCompra = 0;
    let totalGral = 0;
    let totalF = 0;
    let totalA = 0;
    let totalC = 0;
    let compra = prompt("Desea realizar una compra S/N").toUpperCase()
    while (compra == "S") {
        let ingresado = prompt("Ingrese el producto que desea comprar: FERNET- CYNAR - APEROL- CAMPARI - VODKA - BRANCA MENTA").toUpperCase() ;
        const productoBuscar = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
        for (let producto of productoBuscar) {
            let cantidad = Number(prompt("Ingrese cantidad a comprar "));
            total = total + (cantidad * producto.precio) ;
            compra = prompt("Desea seguir comprando S/N").toUpperCase();
            if (compra != "S")
            {break;
            } 
         } 
         } 

    ivaCompra = total * iva;         
    alert(`El total de su compra sin IVA es: $ ${total}`);
    alert(`El total de su compra con IVA es: $ ${ivaCompra}`); 
    entrada();
}
 */

//informacion del fernet
const boton1 = document.getElementById("infoFernetB");
const boton2 = document.getElementById("infoFernetV");
boton1.addEventListener("click", infoFernetB);
boton2.addEventListener("click", infoFernetV);
function infoFernetB() {
    Swal.fire({
        imageUrl: '/image/branca.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        title: `<strong><u>Fernet Branca</u></strong>`,  
        text: 'Hierbas, frutos, raíces y cortezas de distintas partes del mundo, se combinan dando vida a Fernet Branca. Dispuestas adecuadamente, esperan el instante justo de ser molidas. Se trituran en los molinos, cuidando de no alterar las propiedades de las hierbas esenciales para  una bebida que sólo es igual a sí misma.'
      })   
}
function infoFernetV() {
    Swal.fire({
        title: `<strong><u>Fernet Vitone</u></strong>`,  
        text: 'Hierbas, frutos, raíces y cortezas de distintas partes del mundo, se combinan dando vida a Fernet Branca. Dispuestas adecuadamente, esperan el instante justo de ser molidas. Se trituran en los molinos, cuidando de no alterar las propiedades de las hierbas esenciales para  una bebida que sólo es igual a sí misma.'
      })   
}


//CARRO DE COMPRAS
// Variables
/* for (let i = 0; i < baseDeDatos.length; i++) {
    let element = baseDeDatos[i];
    carrito.push(element);
    console.log(carrito[i]);    
} */

const baseDeDatos= [
    [
        {
            id: "FB12",
            nombre: "FERNET",
            precio: 990,
            marca: "BRANCA",
            cantidad: 94
        },
        {
            id:"FV32",
            nombre: "CYNAR",
            precio: 490,
            marca: "BLACK",
            cantidad: 24
        },
        {
            id: "AP23",
            nombre: "APEROL",
            precio: 690,
            marca: "SPIRITZ",
            cantidad: 27
        },
        {
            id: "'CP12'",
            nombre: "'CAMPARI'",
            precio: 490,
            marca: "'ROJO'",
            cantidad: 39
        },
        {
            id: "'F1881'",
            nombre: "'VODKA'",
            precio: 290,
            marca: "'ORANGE'",
            cantidad: 143
        },
        {
            id: "'F1882'",
            nombre: "'PISCO'",
            precio: 290,
            marca: "'1882'",
            cantidad: 143
        },
        {
            id: "'FBM'",
            nombre: "'BRANCA MENTA'",
            precio: 390,
            marca: "'FERNET'",
            cantidad: 15
        }
    ]
    
];
let carrito = []; 
const clickButon = document.querySelectorAll(".btnCompra");
const tbody = document.querySelector(`.tbody`);

clickButon.forEach(btn =>{
    btn.addEventListener("click", addToCarritoItem)
    //console.log(btn)
})

function addToCarritoItem(e) {
    const button = e.target;
    const item = button.closest(`.card`);
    const itemTitulo = item.querySelector(`.fw-bolder`).textContent;
    const itemPrecio = item.querySelector(`.precio`).textContent;
    const itemImagen = item.querySelector(`.card-img-top`).src;
    
    const newItem = {
        titulo : itemTitulo,
        precio : itemPrecio,
        imagen : itemImagen,
        cantidad : 1 
    }
  //console.log(newItem)
    addItemCarrito(newItem);
} 
 
function addItemCarrito(newItem) {
    
    carrito.push(newItem);
    console.log(carrito)
    //cargarCarrito();   
}
/* 
function cargarCarrito() {
    tbody.innerHTML = " ";
    carrito.map(item => {
        const tr = document.createElement(`tr`);
        tr.classList.add(`ItemCarrito`);
        const Content = `
            <td class="tablaNombre"><p>${itemTitulo}</p></td>
            <td class="tablaPrecio"><p>${itemPrecio}</p></td>
        `
        tr.innerHTML = Content;
        tbody.appendChild(tr);
    })
console.log(carrito)
} */
  