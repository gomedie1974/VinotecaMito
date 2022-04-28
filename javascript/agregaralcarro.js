//informacion del fernet
const boton1 = document.getElementById("infoFernetB");
const boton2 = document.getElementById("infoFernetV");
boton1.addEventListener("click", infoFernetB);
boton2.addEventListener("click", infoFernetV);
function infoFernetB() {
    Swal.fire({
        imageUrl: 'image/branca.jpg',
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
const baseDeDatos = 
[
    {
        id: 'FB12',
        nombre: 'FERNET',
        precio: 990,
        marca: 'BRANCA',
        cantidad: 94
    },
    {
        id:'FV32',
        nombre: 'CYNAR',
        precio: 490,
        marca: 'BLACK',
        cantidad: 24
    },
    {
        id: 'AP23',
        nombre: 'APEROL',
        precio: 690,
        marca: 'SPIRITZ',
        cantidad: 27
    },
    {
        id: 'CP12',
        nombre: 'CAMPARI',
        precio: 490,
        marca: 'ROJO',
        cantidad: 39
    },
    {
        id: 'F1881',
        nombre: 'VODKA',
        precio: 290,
        marca: 'ORANGE',
        cantidad: 143
    },
    {
        id: 'F1882',
        nombre: 'PISCO',
        precio: 290,
        marca: '1882',
        cantidad: 143
    },
    {
        id: 'FBM',
        nombre: 'BRANCA MENTA',
        precio: 390,
        marca: 'FERNET',
        cantidad: 15
    },
];
let carrito = [];
//baseDeDatosObjeto = {}

for (let i = 0; i < baseDeDatos.length; i++) {
    let element = baseDeDatos[i];
    carrito.push(element);
    console.log(carrito[i]  );    
}