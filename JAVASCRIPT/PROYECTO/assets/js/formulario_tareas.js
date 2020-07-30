import * as modulo from './modulo_funciones.js';

$(document).ready((e) => {
    let tarea = {
        titulo: 'Preparar clase',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25')
    };

    let tareas = modulo.getTareasEnStorage();

    $('#btn-guardar').click(function (e) {
        let titulo = $("#titulo");
        let descripcion = $("#descripcion");
        //titulo.val() // con este metodo de jquery podemos acceder al valor del input

        if (!titulo.val()) {
            titulo.addClass('is-invalid')
            return;
        } else {
            titulo.removeClass('is-invalid'); // con este metodo podemos remover una clase a un elemento
            titulo.addClass('is-valid')
        }

        if (!descripcion.val()) {
            descripcion.addClass('is-invalid')
            return;
        } else {
            descripcion.removeClass('is-invalid'); // con este metodo podemos remover una clase a un elemento
            descripcion.addClass('is-valid')
        }


        let tarea = {
            titulo: titulo.val(),
            descripcion: descripcion.val(),
            estado: true,
            fecha: new Date()
        };

        modulo.setTareasEnStorage(tarea);
        titulo.val("");
        descripcion.val("");
        titulo.removeClass('is-valid');
        descripcion.removeClass('is-valid');
    });
});
