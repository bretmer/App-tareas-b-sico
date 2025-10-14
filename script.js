function mostrarMensaje() {
    console.log("Hola, como estas?");

}
function capturarTexto (){
    let input = document.querySelector("#nuevaTarea");
    if (input.value === "") {
        alert("El campo no puede estar vacio");
        return;
    }
    let valorInput = input.value;
    let ul = document.querySelector("#listaTareas");
    let li = document.createElement("li");
    li.textContent = valorInput;
    let button = document.createElement("button");
    button.textContent = "Eliminar";
    button.onclick = function() {
li.remove();
    };
    li.appendChild(button);
    ul.appendChild(li);
    input.value = "";
}