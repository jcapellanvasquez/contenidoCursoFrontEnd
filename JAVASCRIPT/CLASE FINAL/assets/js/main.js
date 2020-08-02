// Metodos utiles para trabajar con Array

//Iterar un array forEach
const listado = [
    10,
    20,
    455,
    0,
    300
];

function multiplicar(value, index, array) {
    console.log(value * 5);
};
listado.forEach(multiplicar);

// Filtrar elementos de un array
function filtrar(value, index, array) {
    return value >= 300;
}

let listadofiltrado = listado.filter(filtrar);
console.log(listadofiltrado);

// Encontrar un elemento dentro de un array
function buscar(value, index, array) {
    return value === 455;
}

let elementoEncontrado = listado.find(buscar);
console.log(elementoEncontrado);

// Mappaer una lista de elementos

let tareas = [
    {id: 1, title: "comprar huevos", completado: false},
    {id: 2, title: "lavar la ropa", completado: false},
    {id: 3, title: "pagar la luz", completado: false},
];

// Funcion que cambia el estado del array o lista
function mappeador(value, index, array) {
    return {
        id: value.id,
        title: value.title,
        completado: true,
        descripcion: "Descripcion creada con el mappeador"
    }
}

let tareasCompletadas = tareas.map(mappeador);
console.log(tareasCompletadas);


