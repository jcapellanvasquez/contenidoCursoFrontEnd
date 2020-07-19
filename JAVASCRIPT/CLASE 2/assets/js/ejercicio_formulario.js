// Esta es la forma como podemos acceder a un elemento del HTML
// y asignarlo a una variable para trabajar con el dato que contenga
let nombre = document.getElementById("nombre").value;
console.log(nombre);

let miFormulario = document.getElementById("miFormulario");
let nombreEventoFormulario = "submit";


// Esta una forma de crear funciones en js
function imprimirDatos(evento) {
    evento.preventDefault();// Instruccion para detener el funcionamiento por defecto del evento
    console.log("Se disparo el evento Enviar")

    let nombre = document.getElementById("nombre").value;
    console.log("Nombre: " + nombre);
}

//imprimirDatos(); // Ejemplo de como ejecutar una funcion

miFormulario.addEventListener(nombreEventoFormulario, imprimirDatos);

