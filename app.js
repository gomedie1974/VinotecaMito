/* para saber si estoy linckeado 
console.log("hola mundo")*/
/* let num1 = 2.22;      
let num2 = 3.22;      

let resultado;
let espacio = " "
resultadoSuma = num1 + num2;
resultadoResta = num1 - num2;
resultadoMulti = num1 * num2;
resultadoDiv = num1 / num2;

console.log("la suma del primer numero" + espacio + num1 + espacio + "y el segundo numero" + espacio + num2 + espacio + "es" + espacio + resultadoSuma)
 */

/*  
//VARIABLES
// var let const

let numeroA = 12; 
let numeroB = 8;

let total;  

total = numeroA + numeroB;

// operadores de ingreso y egreso de datos

console.log(total)

//alert
alert("hola soy una alerta")
alert(total)

//confirm
confirm("confirma su edad")
 */
/* 
const espacio = " ";
const numAlmacenado = 50;

let nombre = prompt("INGRESE SU NOMBRE");
let apellido = prompt("INGRESE SU APELLIDO");

alert("Hola" + espacio + nombre + espacio + apellido);      

let num1 = parseInt (prompt(nombre + " " + "Ingresa el primer numero"));      
alert(nombre + " " + "El segundo numero almacenado es" + espacio + numAlmacenado);      

let resultado;
resultadoSuma = Number (numAlmacenado + num1);

alert("la suma del primer numero" + espacio + num1 + espacio + "y el segundo numero almacenado" + espacio + numAlmacenado + espacio + "es" + espacio + resultadoSuma);
 */
/* 
total = 1;
total = total + 1;

// forma abreviada de operacion 
total += 1;
 */
//operadores logicos
// and se pone &&
// or se pone ||
// negacion se pone !
// comparacion ej < > == != >= 
/* 
let nota = 6;
if (nota >= 4) {
    console.log ("aprobo")
} else {
    console.log ("no aprobo")
} */

/* let nombre = "carla";

if (nombre == "carla") || (nombre == "CARLA") {
    console.log ("sos carla")
    else { 
        console.log ("no sos carla")
    }
}

let usuario = "juanc";
let contra = "1234";

let login = prompt{"ingresa tu usuario"};
let pass = prompt{"ingresa tu clave"};

if ((usario == login) && (contra == pass)){
    alert("usuario y contra correcta")
    else {
        alert("usuario o contra incorrecto")
    }
}

 */
/* 
if (condition) {
} else if (condition) {    
} {
} */
/* 
let numeroIngresado = parseInt (prompt("Ingresa un numero"));      

if (numeroIngresado > 1000) {
    alert("el numero ingresado es mayor a 1000")   
} else {
    alert ("el numero ingresado es menor a 1000")   
}

let textoIngresado = prompt("Ingrese una palabra");

if ((textoIngresado == "hola") || (textoIngresado == "Hola") || (textoIngresado == "HOLA")) {
    alert ("la palabra ingresada es igual a Hola")   
} else {
    alert ("la palabra ingresada NO es igual a Hola")   
}

let nroIngresado = prompt("Ingrese un numero");

if ((nroIngresado > 10) && (nroIngresado < 50)) {
    alert ("El numero ingresado esta entre 10 y 50")   
} else {
    alert ("El numero ingresado NO esta entre 10 y 50")   
}
 */
/* /* 
let num = parseInt (prompt("ingrese numero"));
for (let i = 1; i < 5; i++){
    let res = num + i;
    alert(num + " + " + i + "=" + res);
} */

/* let palabraIng = prompt("ingrese una palabra");
while (palabraIng != "esc") {
    alert("Ud ingreso" + " " + palabraIng);
    palabraIng = prompt("ingrese una palabra");
} 
 */
/*  let numNuevo = Number(prompt("ingrese un numero - 0 para salir"));
 let i = 0;

while (numNuevo != 0) {
    i = i + 1;
    numNuevo = Number(prompt("ingrese un numero - 0 para salir"));
}
alert("Ud ingreso" + " " + i + " " + "numeros" );
 */
  
/* let opcion = Number(prompt("ingrese su opcion, 1-aperitivo, 2-cervezas, 3-vinos, 0 para salir"));
while (opcion != 0) {
    switch (opcion) {
        case 1:
            alert("Ud eligio opcion 1 sera redirigido a la pagina aperitivo");
            break;
        case 2:
            alert("Ud eligio opcion 2 sera redirigido a la pagina de cervezas");
            break;
        case 3:
            alert("Ud eligio opcion 3 sera redirigido a la pagina de vinos");
            break; 
        default:
            alert("Ud eligio una opcion incorrecta, vuelva a intentarlo");
            break;
    }
    opcion = Number(prompt("ingrese su opcion, 1-aperitivo, 2-cervezas, 3-vinos, 0 para salir"));
}
 */ 
 /* 
let edad = Number(prompt("Ingrese su edad, debe ser mayor a 17 años para poder navegar"));

if (edad >= 18) {
    alert("Ud es mayor de edad, acceso permitido" );    

        let numNuevo = Number(prompt("Ingrese un número - 0 para salir")); 
        let i = 0;
        while (numNuevo != 0) {
        i = i + 1; 
        numNuevo = Number(prompt("Ingrese un número - 0 para salir"));
        }
    alert("Ud ingreso" + " " + i + " " + "números" );
    }
    else {
        alert("Ud NO es mayor de edad" );
        alert("!!!INGRESO DENEGADO!!!" );
        window.location.assign ("https://www.google.com");
}
 */
/* 
for (let i = 0; i < 5; i++) {
    console.log("Hola repeti" + i);
    
} */
/* 
switch (key) {
    case value:
        
        break;
    case value:
        
        break;
    case value:
        
        break;
    default:
        break;
} */
/* 
let pedidoDeTurnos = prompt("Ingrese dia que quiere turno, lunes, martes o miercoles");

switch (pedidoDeTurnos) {
    case "lunes": 
        alert("Su turno fue tomado para Lunes");
        break;
    case "martes": 
    alert("Su turno fue tomado para Martes");
        break;
    case "miercoles": 
    alert("Su turno fue tomado para Mirecoles");
        break;
    
    default:
        alert("Ese dia no se dan turnos, vuelva a intentar");
        break;        
} */
//funciones
/* 
function saludo() {
    alert ("hola soy una funcion");
}
saludo()
 */

/* function sumar(n1, n2) {
    //console.log(n1+n2)   
    return (n1+n2);
}
alert(sumar(10,20));
 */

//funcion calculadora

/* function calculadora(numero1, numero2, operador) {
    switch (operador) {
        case "+":
            return numero1 + numero2;
    
        case "-":
            return numero1 - numero2;
    
        case "*":
            return numero1 * numero2;
    
        case "/":
            return numero1 / numero2;
    
        default:
            return 0
    }
}
let valor1 = Number (prompt("ingresa el valor 1"))
let valor2 = Number (prompt("ingresa el valor 2"))
let operacion = prompt("ingresa la operacion +, -, *, /");

alert(calculadora(valor1, valor2, operacion)); */


/* 
let total = 0;
let cantidad = 0;
function comprar() {
    let productos = ["FERNET", "APEROL", "CAMPARI"];
    let precios = [890, 650, 403];
    const iva = 1.21;
    let ivaCompra = 0;
    let totalGral = 0;
    let totalF = 0;
    let totalA = 0;
    let totalC = 0;
    let compra = prompt("Desea realizar una compra S/N")
    while (compra == "S" || compra == "s") {
        let opcion = prompt("Ingrese producto a comprar FERNET, APEROL, CAMPARI"); 
        if (opcion == productos[0]) {
            let cantidad = Number(prompt("Ingrese cantidad a comprar "));
            totalF = cantidad * precios[0];
            totalGral = totalGral + totalF + totalA + totalC;
            compra = prompt("Desea seguir comprando S/N");
         } else { if (opcion == productos[1]) {
            let cantidad = Number(prompt("Ingrese cantidad a comprar "));
            totalA = cantidad * precios[1]; 
            totalGral = totalGral + totalF + totalA + totalC; 
            compra = prompt("Desea seguir comprando S/N");            
         } else { if (opcion == productos[2]) {
            let cantidad = Number(prompt("Ingrese cantidad a comprar "));
            totalC = cantidad * precios[2]; 
            totalGral = totalGral + totalF + totalA + totalC; 
            compra = prompt("Desea seguir comprando S/N");            
         }
         else {
            alert("OPCION ERRONEA");
            break;
            }
         } 
        } 
    }
    ivaCompra = totalGral * iva;         
    alert("El total de su compra sin IVA es:" + " " + totalGral);
    alert("El total de su compra con IVA es:" + " " + ivaCompra); 
    alert("El total de su compra de Fernet es:" + " " + totalF); 
    alert("El total de su compra de Aperol es:" + " " + totalA); 
    alert("El total de su compra de Casmpari es:" + " " + totalC); 
}

 */

/* alert("Usted va a ingresar a dar de alta los productos");
let comprobar = prompt("Ingrese el nombre del producto o FIN para terminar la carga");       
do {
    if (comprobar === "FIN" || comprobar === "Fin" || comprobar === "fin"){
        break;
    }else{
        nonmbreNew = comprobar;
        let precioNew = prompt("Ingrese el precio del producto");
        let marcaNew = prompt("Ingrese la marca del producto");
        let cantidadNew = prompt("Ingrese cantida del producto");
        arrayProductos.push(new Producto(nonmbreNew, precioNew, marcaNew, cantidadNew));
        comprobar = prompt("Ingrese el nombre del producto o FIN para terminar la carga");       
    }     
} while (comprobar != "FIN" || comprobar != "Fin" || comprobar != "fin");
 */
 
let edad = Number(prompt(`Ingrese su edad, debe ser mayor a 17 años para poder navegar`));

if (edad >= 18) { 
    permitido();
    }
    else {
    noPermitido();
    }
function permitido() {
    alert("Ud es mayor de edad, acceso permitido" );
    buscar();
    }
function noPermitido() {
    alert("Ud NO es mayor de edad" );
    alert("!!!INGRESO DENEGADO!!!" );
    window.location.assign ("https://www.google.com");
}

const arrayProductos = [];
class Producto {
    constructor (codigo, nombre, precio, marca, cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.marca = marca;
        this.cantidad = cantidad;
        this.disponible = true;
    }
}
this.info = 'Producto '
arrayProductos.push(new Producto("FB12", "FERNET", 990, "BRANCA", 94 ));
arrayProductos.push(new Producto("FV32", "FERNET", 490, "VITONE", 24 ));
arrayProductos.push(new Producto("AP23", "APEROL", 690, "APEROL", 27 ));
arrayProductos.push(new Producto("CP12", "CAMPARI", 490, "CAPARI", 39 ));
arrayProductos.push(new Producto("F1882", "FERNET", 290, "1882", 143 ));
arrayProductos.push(new Producto("FBM,", "FERNET", 390, "BRANCA MENTA", 15 ));
let productoBuscar = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
    
//Busqueda de productos
function buscar() {  
    let ingresado = prompt("Ingrese el producto que desea buscar: FERNET-APEROL-CAMPARI");
    /* let productoBuscar = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
     */for (let producto of productoBuscar){
    alert (`El precio del  ${producto.nombre} ${producto.marca} es ${producto.precio} y la cantidad actual en stock es ${producto.cantidad}`);
    }
} 
