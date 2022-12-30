window.addEventListener('load', function() {
    addOptionsToSelect();   
}); 

function addOptionsToSelect(selectDelivery){
    const deliverys = ["Daniel Hernandez Agredo", "Sergio Perez" , "Carlos Menchaca", "Luna Uribe"];
    let select = document.getElementById('selectDelivery')[0];

    for(i=0;i<=deliverys.length;i++){
        deliverys.options[i] = new deliverys
    }
}
