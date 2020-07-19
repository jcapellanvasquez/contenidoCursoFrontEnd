// Ejercicios con bucles


// Ejemplo basico de for
for (let i = 0; i <= 10; i = i + 1) {
    console.log(`El valor de i es: ${i * 200}`);
}

// Ejemplo de array

let autos = new Array();

autos.push("Honda accord");
autos.push("Toyota corolla");
autos.push("Mazda Rx8");
autos.push(200);


console.log(autos);
console.log("Longitud de mi lista de autos");
console.log(autos.length);

// Array de objetos

let tareas = new Array();
let tarea1 = {
    titulo: "Correguir examen",
    descripcion: "Entrar a la plataforma del itla y .....",
    estaCompletada: false
};

let tarea2 = {
    titulo: "Subir clase",
    descripcion: "Entrar a la plataforma del itla y .....",
    estaCompletada: false
};

// Metodo para agregar un valor a un array
tareas.push(tarea1);
tareas.push(tarea2);

// Ejemplo de for utilizando un array de objetos
for (let i = 0; i <= tareas.length; i++) {
    console.log(`Tarea: ${tareas[i].titulo}`);
}
