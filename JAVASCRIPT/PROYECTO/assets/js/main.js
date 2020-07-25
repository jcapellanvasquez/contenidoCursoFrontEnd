$(document).ready((e) => {
    let tareas = [];
    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    tareas.push({
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25') // Este
    });

    $('#btn-todo').click(function (e) {
        let imagenFondo = $("div.sin-tareas");
        imagenFondo.addClass("ocultar");

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
