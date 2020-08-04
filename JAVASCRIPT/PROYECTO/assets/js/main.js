import * as modulo from './modulo_funciones.js';

$(document).ready((e) => {
    let tareas = modulo.getTareasEnStorage();

    function generateTagTarea(tareas) {
        return `
                <div class="tarea card shadow-1 border-0 mb-4">
                    <div class="card-body tarea-contenedor">
                        <h4 class="tarea-titulo">${tareas.titulo}</h4>
                        <p class="tarea-descripcion">${tareas.descripcion}</p>
                        <a data-tarea-id="${tareas.id}" href="#" class="btn btn-link tarea-boton ${tareas.estado ? 'completado-color' : 'text-warning'}">
                            <i data-tarea-id="${tareas.id}" class="fa ${tareas.estado ? 'fa-check-circle-o' : 'fa-clock-o'} fa-check-circle-o"></i>
                        </a>
                    </div>
                </div>
            `
    };

    function cargarTareas(tareas) {
        let htmlTareas = $(".tarea");
        htmlTareas.remove();
        let imagenFondo = $("div.sin-tareas");
        if (tareas.length == 0) {
            imagenFondo.removeClass("ocultar");
            return;
        } else {
            imagenFondo.addClass("ocultar");
            tareas.forEach(tarea => {
                let contenedorTareas = $('article.lista-tareas-contenido');
                contenedorTareas.append(generateTagTarea(tarea));
            })
        }
    }

    function activarBoton(boton) {
        let filtros = $("#filtros").children();
        filtros.removeClass("completado-bg-color");
        filtros.addClass("btn-light");
        $(boton).removeClass("btn-light").addClass("completado-bg-color");
    }

    $('#btn-todo').click(function (e) {
        activarBoton(e.target);
        if (tareas.length == 0) {
            return;
        }
        tareas = modulo.getTareasEnStorage();
        cargarTareas(tareas)
    });


    $('#btn-completada').click(function (e) {
        activarBoton(e.target);
        cargarTareas(tareas.filter(modulo.filtrarCompletadas));
    });

    $('#btn-incompleta').click(function (e) {
        activarBoton(e.target);
        cargarTareas(tareas.filter(modulo.filtrarInCompletadas));
    });


    $('article.lista-tareas-contenido').on('click', 'h4.tarea-titulo', e => {
        let descripcion = $(e.target).parent().children(".tarea-descripcion");
        if ((descripcion.get(0) && descripcion.get(0).style.maxHeight.length === 0) || (descripcion.get(0) && descripcion.get(0).style.maxHeight === "0px")) {
            descripcion.css("opacity", "1");
            descripcion.css("max-height", "300px");
            descripcion.css("transition-property", "all");
            descripcion.css("transition-duration", "250ms");
        } else {
            descripcion.css("opacity", "0");
            descripcion.css("max-height", "0px");
            descripcion.css("transition-property", "all");
            descripcion.css("transition-duration", "200ms");
        }

    });

    $('article.lista-tareas-contenido').on('click', 'a.tarea-boton', e => {
        console.log(e.target.getAttribute("data-tarea-id"));
        let id = e.target.getAttribute("data-tarea-id");
        id = +id;
        let tareas = modulo.getTareasEnStorage().map(tarea => {
            if (tarea.id === id) {
                tarea.estado = !tarea.estado;
                return tarea
            }
            return tarea
        });

        modulo.updateTareasEnStorage(tareas);
    });

    $('#btn-incompleta').trigger("click");

});
