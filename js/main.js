//se asegura de cargar la pagina para luego llamar a la funcion que llena el select.
window.addEventListener('load', function() {
    addOptionsToSelect();   
}); 

// Añade las opciones al Select
function addOptionsToSelect(selectDelivery){
    const deliverys = ["Daniel Hernandez Agredo", "Sergio Perez" , "Carlos Menchaca", "Luna Uribe"];
    let select = document.getElementById('selectDelivery');

    for(i=1;i<=deliverys.length;i++){
        select.options[i] = new Option(deliverys[i-1]);
    }
}

//obtiene el formulario
let form = document.getElementById('formGuide');

//desata el evento 
const sendGuide = document.querySelector('.btn-guide');
sendGuide.addEventListener('click', validateGuide);

//valida los datos del formulario y agrega los modales de Sweetalert2
function validateGuide(){
    //definimos los campos del formulario
    let delivery = document.getElementById('selectDelivery').value;
    let guide = document.getElementById('numberGuide').value;

    //valida los campos
    if (delivery != 'Selecciona un mensajero' && guide != ''){
        //pregunta por guardar la guia y crea el arbol de opciones.
        Swal.fire({
            icon: 'question',
            title: 'Quieres asignar esta guia?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: 'No guardar'
        }).then((result) => {
            if (result.isConfirmed){
                Swal.fire({
                    icon:'success',
                    title:'Guia guardada'
                })
                //se crea un form data que contine los datos y los envia a validation.php haciendo uso de fetch.API
                let data = new FormData(form)
                fetch('validation.php',{
                    method: 'POST',
                    body: data
                });
                // crea la ventana despues de denergar el envio
            } else if (result.isDenied){
                Swal.fire({
                    icon: 'error',
                    title: 'No se guardo la guia'
                })
            }
        })
        //crea el modal de error en las validaciones
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error en las validaciones',
            text: 'Por favor verifica los datos de entrada'
        })
    }
}