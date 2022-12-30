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
    let form = document.forms['formGuide'];
    let delivery = form['selectDelivery'].value;
    let guide = form['numberGuide'].value;
    //validación de mensajero
    if (delivery === 'Selecciona un mensajero'){
        Swal.fire({
            icon: 'error',
            title: 'Error en las validaciones',
            text: 'Debes seleccionar un mensajero'
        })
    }
    //validacion de guia
    if(guide == ''){
        Swal.fire({
            icon: 'error',
            title: 'Error en las validaciones',
            text: 'Debes ingresar un numero de guia'
        })
    }

    saveGuide();
}
