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

let boton1 = document.getElementById("infoFernetB");
boton1.addEventListener("click", infoFernet);
function infoFernet() {
    Swal.fire({
        text: "El FERNET es una bebida alcohólica elaborada a partir de la maceración de varios tipos de hierbas (mirra, ruibarbo, manzanilla, cardamomo, orégano y azafrán, entre otras) en alcohol obtenido de la fermentación de la vid. Posee un color oscuro, un aroma intenso y su graduación alcohólica está comprendida entre 39 y 45 grados, según la marca.",
      })   
}