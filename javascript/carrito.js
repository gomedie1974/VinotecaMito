let array = JSON.parse(localStorage.getItem("carrito")) || []
//console.log(array);

let tbody = document.querySelector(".tbody");

array.map(dato => {
    tbody.innerHTML += `
    <tr>
        <th> <img src="${dato.imagen}" widht=100 height=100 </th> 
        <th> ${dato.titulo}</th> 
        <th> ${dato.precio}</th> 
        <th> ${dato.cantidad}</th>         
    </tr> 
    
    `
})


    