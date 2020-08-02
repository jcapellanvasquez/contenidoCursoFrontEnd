let tareas = [
    {id: 1, title: "comprar huevos"},
    {id: 2, title: "lavar la ropa"},
    {id: 3, title: "pagar la luz"},
];
const buscarTareaPromesa = function (tareas, encontrarTarea) {
    return new Promise(function (resolve, reject) {
        const tareaEncontrada = tareas.find( value => {
            return value.id === encontrarTarea.id;
        });

        if (tareaEncontrada) {
            return resolve(tareaEncontrada);
        }
        return reject("Tarea no encontrada");
    })
};
let encontrarTarea = {
    id: 3,
    title: "Mi tarea favorita"
};


//buscarTareaPromesa(tareas, encontrarTarea).then(console.log).catch(console.log);


// Ejemplo de abrir un modal con promesas
const abrirModal = function () {
    $("#myModal").modal("show");
    console.log(`Modal abierto ${new Date}`);
    return new Promise((resolve, reject)=> {
        $("#myModal").on("hidden.bs.modal", e => {
            return resolve(`Modal cerrado ${new Date}`)
        });
    })
};

abrirModal()
    .then(response => {
    console.log(response);
}).catch();
