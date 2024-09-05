const btnGuardar = document.getElementById("btnGuardar");
const txtNombre = document.getElementById("txtNombre");
const alertValidaciones = document.getElementById("alertValidaciones");

btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
        alertValidaciones.innerHTML="";
        alertValidaciones.style.display="none";
    if(txtNombre.value.length<3){
        alertValidaciones.innerHTML="Nombre incorrecto";
        alertValidaciones.style.display="block";
    }/**if */
    localStorage.setItem("nombre", txtNombre.value);
});