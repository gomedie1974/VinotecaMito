let array = JSON.parse(localStorage.getItem("carrito")) || []
console.log(array);

let tbody = document.querySelector(".tbody");
 
array.map(dato => {
    tbody.innerHTML += `
    <tr>
        <th> 
            <img src="${dato.imagen}" widht=100 height=100
        </th> 
        <th> ${dato.titulo}</th> 
        <th> ${dato.precio}</th> 
        <th> 
            <input type="number" min="1" max="20" value=${dato.cantidad}> 
        </th>        
        <th> ${dato.total}</th> 
        <th>
            <button href="#" class="borrarProducto fas fa-times-circle bg-danger text-white">X </button>   
        </th>        
    </tr> `   
})

//BORRAR UN PRODUCTO
const clickBorro = document.querySelectorAll(".borrarProducto");
clickBorro.forEach(btn =>{
    btn.addEventListener("click", borrarProd)
})
function borrarProd(e) {
    e.target.parentElement.parentElement.remove();
    elemento = e.target.parentElement.parentElement;
}

//VACIAR TODO EL CARRO
const vaciarCarro = document.getElementById("vaciar-carrito");
vaciarCarro.addEventListener("click", () => {
    array.length = 0;
    console.log(array);
    tbody.remove();     
});
 

 