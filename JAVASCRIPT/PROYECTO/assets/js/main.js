import * as modulo from './modulo_funciones.js';

$(document).ready((e) => {
    let tareas = modulo.getTareasEnStorage();

    // window.document
    // window.localStorage
    // window.JSON

    $('#btn-todo').click(function (e) {
        let imagenFondo = $("div.sin-tareas");
        imagenFondo.addClass("ocultar");
        if (tareas.length == 0) {
            return;
        }
        tareas = modulo.getTareasEnStorage();

        for (let i = 0; i < tareas.length; i++) {
            let contenedorTareas = $('article.lista-tareas-contenido');
            contenedorTareas.append(`
                <div class="tarea card shadow border-0 mb-4">
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

    $('#btn-completada').click(function (e) {
        let htmlTareas = $(".tarea");
        htmlTareas.remove();
        let imagenFondo = $("div.sin-tareas");
        imagenFondo.addClass("ocultar");
        tareas = tareas.filter(modulo.filtrarCompletadas);
        let btn = $('#btn-completada');
        btn.removeClass("btn-light");
        btn.addClass("completado-bg-color");
        if (tareas.length == 0) {
            return;
        }

        for (let i = 0; i < tareas.length; i++) {
            let contenedorTareas = $('article.lista-tareas-contenido');
            contenedorTareas.append(`
                <div class="tarea card shadow border-0 mb-4">
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
