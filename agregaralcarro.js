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
/* 
let boton1 = document.getElementById("btnCompra");
boton1.addEventListener("click", hacerCompra);
 */

const carrito = [];

cargarEventos();

function cargarEventos() {
    let boton1 = document.getElementById("btnCompra");
    boton1.addEventListener("click", hacerCompra);
}

function hacerCompra(e) {
    console.log("hola")

    
}