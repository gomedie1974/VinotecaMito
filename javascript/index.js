
            function edad(){
            if (document.form1.num.value > 17){
                Swal.fire({
                title: 'BIENVENIDO!',
                text: 'Ud es mayor de edad, acceso permitido',
                imageUrl: 'image/bienvenidos.gif',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonText: "Ingresar", 
                showConfirmButton: true,
                  }).then((result) => {
                  if (result.isConfirmed) {
                      window.location="pages/inicio.html"
                  }
                })
              }
            else {Swal.fire({
                   title: 'ACCESO DENEGADO!',
                   text: 'Ud es MENOR de edad',
                   confirmButtonText: "Ok",
                   footer: 'Será redireccionado a otra página ', 
                   showConfirmButton: true,
                  }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.assign ("https://www.google.com");
                  }
                    })
                }}
            document.oncontextmenu=new Function("return false");
            
     