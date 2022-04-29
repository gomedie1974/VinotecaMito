  //formulario alta cliente
  let formulario = document.getElementById("form");
  formulario.addEventListener ("submit", enviarDatos);
  
  function enviarDatos(e) {
      e.preventDefault();
        Swal.fire({
            title: '<strong><u>Formulario enviado</u></strong>'
          })
         // obtener el dato que ingrese  
        let dato = e.target;
        //obtengo el dato de cada uno de los hijos
          console.log(dato.children[0].value);
          console.log(dato.children[1].value);
          console.log(dato.children[2].value);
        }   
      

