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
 
let edad = Number(prompt("ingrese su edad"));

if (edad >= 18) {
    alert("Ud es mayor de edad, puede navegar en la pagina" );    

        let numNuevo = Number(prompt("Ingrese un numero - 0 para salir")); 
        let i = 0;
        while (numNuevo != 0) {
        i = i + 1; 
        numNuevo = Number(prompt("Ingrese un numero - 0 para salir"));
        }
    alert("Ud ingreso" + " " + i + " " + "numeros" );
    }
    else {
        alert("Ud NO es mayor de edad" );
        alert("INGRESO DENEGADO" );
        window.location.assign ("https://www.google.com");
        //window.locai= "./pabla5 
}
/* 
for (let i = 0; i < 5; i++) {
    console.log("Hola repeti" + i);
    
} */