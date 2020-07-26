// localstorage
//
$(document).ready((e) => {
    let tarea = {
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    };

    function getTareasEnStorage() {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        if (!tareas) {
            tareas = [];
            localStorage.setItem("tareas", JSON.stringify(tareas));
        }
        return tareas;
    }

    function setTareasEnStorage(tarea) {
        let tareas = getTareasEnStorage();
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    //setTareasEnStorage(tarea);

    let tareas = getTareasEnStorage();

    $('#btn-guardar').click(function (e) {
        let titulo = $("#titulo");
        let descripcion = $("#descripcion");


    });
});
