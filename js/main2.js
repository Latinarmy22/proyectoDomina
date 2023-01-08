//se asegura de cargar la pagina para luego llamar a la funcion que llena el select.
window.addEventListener('load', function() {
    addOptionsToSelect();   
}); 

function addOptionsToSelect(selectDelivery){
    const deliverys = ["Daniel Hernandez Agredo", "Sergio Perez" , "Carlos Menchaca", "Luna Uribe"];
    let select = document.getElementById('selectDelivery');

    for(i=1;i<=deliverys.length;i++){
        select.options[i] = new Option(deliverys[i-1]);
    }
}

const sendGuide = document.querySelector('.btn-guide');
sendGuide.addEventListener('click', validateGuide);

function validateGuide(){
    function assignedGuide(delivery,numberGuide){
        this.delivery=delivery;
        this.numberGuide=numberGuide;
    }
    let delivery = document.getElementById('selectDelivery').value;
    let guide = document.getElementById('numberGuide').value;

    if (delivery != 'Selecciona un mensajero' && guide != ''){
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
                newGuide = new assignedGuide(delivery,guide);
                saveGuide();
            } else if (result.isDenied){
                Swal.fire({
                    icon: 'error',
                    title: 'No se guardo la guia'
                })
            }
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error en las validaciones',
            text: 'Por favor verifica los datos de entrada'
        })
    }
}

function saveGuide(){
    const guideList = [];
    guideList.push(newGuide);
    console.log(guideList)
}
