//INFO PRODUCTOS
const boton1 = document.getElementById("infoFernetB");
const boton2 = document.getElementById("infoFernetV");
boton1.addEventListener("click", infoFernetB);
boton2.addEventListener("click", infoFernetV);
function infoFernetB() {
    Swal.fire({
        imageUrl: '../image/branca.jpg',
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

    