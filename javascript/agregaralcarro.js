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
const baseDeDatos = [];
class Producto {
    constructor (codigo, nombre, precio, marca, cantidad){
        this.id = this.id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.marca = marca;
        this.cantidad = cantidad;
        this.disponible = true;
    }
    sumarIva(){
        this.precio = this.precio * 1.21; 
    }
    vendido() {
        this.disponible = false;
    }
}

baseDeDatos.push(new Producto("FB12", "FERNET", 990, "BRANCA", 94 ));
baseDeDatos.push(new Producto("FV32", "CYNAR", 490, "BLACK", 24 ));
baseDeDatos.push(new Producto("AP23", "APEROL", 690, "SPIRITZ", 27 ));
baseDeDatos.push(new Producto("CP12", "CAMPARI", 490, "ROJO", 39 ));
baseDeDatos.push(new Producto("F1881", "VODKA", 290, "ORANGE", 143 ));
baseDeDatos.push(new Producto("F1882", "FERNET", 290, "1882", 143 ));
baseDeDatos.push(new Producto("FBM,", "BRANCA MENTA", 390, "FERNET", 15 ));

let carrito = [];
//console.log (baseDeDatos)

for (let i = 0; i < baseDeDatos.length; i++) {
    let element = baseDeDatos[i];
    carrito.push(element);
    console.log(carrito[i]);    
}