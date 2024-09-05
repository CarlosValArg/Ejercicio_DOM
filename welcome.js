const alertMensaje = document.getElementById("alertMensaje");
const btnElim =document.getElementById("btnElim");

window.addEventListener("load",function(event){

    if(this.localStorage.getItem("nombre") !=null){
        alertMensaje.innerHTML =`Hello, ${this.localStorage.getItem("nombre")}, Welcome again`;
    }/**if nombre!=null */
    alertMensaje.style.display="block";
}); /**load */

btnElim.addEventListener("click",function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    location.href="welcome.html"
})