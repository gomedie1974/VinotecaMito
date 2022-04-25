//CARRO DE COMPRAS
// Variables
let baseDeDatos = 
[
    {
        id: 'FB12',
        nombre: 'FERNET',
        precio: 990,
        Marca: 'BRANCA',
        cantidad: 94
    },
    {
        id:'FV32',
        nombre: 'CYNAR',
        precio: 490,
        Marca: 'BLACK',
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
/* let boton2 = document.getElementById("btnCompra1");
let boton3 = document.getElementById("btnCompra2");
let boton4 = document.getElementById("btnCompra3");
let boton5 = document.getElementById("btnCompra4");
let boton6 = document.getElementById("btnCompra5");
boton2.addEventListener("click",hacerCompra);
boton3.addEventListener("click",hacerCompra);
boton4.addEventListener("click",hacerCompra);
boton5.addEventListener("click",hacerCompra);
boton6.addEventListener("click",hacerCompra);
*/

const carrito = [];

let boton1 = document.getElementById("btnCompra");
boton1.addEventListener("click", hacerCompra);

function hacerCompra() {
    
    alert("hola")
}