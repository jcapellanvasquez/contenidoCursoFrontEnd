$(document).ready((e) => {
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
    let tareas = getTareasEnStorage();

    // window.document
    // window.localStorage
    // window.JSON

    $('#btn-todo').click(function (e) {
        let imagenFondo = $("div.sin-tareas");
        imagenFondo.addClass("ocultar");
        if (tareas.length == 0) {
            return;
        }
        for (let i = 0; i < tareas.length; i++) {
            let contenedorTareas = $('article.lista-tareas-contenido');
            contenedorTareas.append(`
                <div class="card shadow border-0 mb-4">
                    <div class="card-body tarea-contenedor">
                        <h2 class="tarea-titulo">${tareas[i].titulo}</h2>
                        <h2 class="tarea-boton completado-color">
                            <i class="fa fa-check-circle-o"></i>
                        </h2>
                    </div>
                </div>
            `);
        }
    });


});
