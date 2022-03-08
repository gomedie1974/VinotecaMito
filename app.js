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

const espacio = " ";
const numAlmacenado = 50;

let nombre = prompt("INGRESE SU NOMBRE");
let apellido = prompt("INGRESE SU APELLIDO");

alert("Hola" + espacio + nombre + espacio + apellido);      

let num1 = parseFloat (prompt(nombre + " " + "Ingresa el primer numero"));      
alert(nombre + " " + "El segundo numero almacenado es" + espacio + numAlmacenado);      

let resultado;
resultadoSuma = parseFloat (numAlmacenado + num1);

alert("la suma del primer numero" + espacio + num1 + espacio + "y el segundo numero almacenado" + espacio + numAlmacenado + espacio + "es" + espacio + resultadoSuma);


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