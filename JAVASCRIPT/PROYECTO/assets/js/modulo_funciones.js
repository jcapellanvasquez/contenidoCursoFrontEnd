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

function updateTareasEnStorage(tareas) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function filtrarCompletadas(tarea) {
    if (tarea.estado) {
        return tarea
    }
}

function filtrarInCompletadas(tarea) {
    if (!tarea.estado) {
        return tarea
    }
}

export {getTareasEnStorage, setTareasEnStorage,filtrarCompletadas,filtrarInCompletadas, updateTareasEnStorage}
