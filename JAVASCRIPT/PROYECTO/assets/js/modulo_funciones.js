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

export {getTareasEnStorage}
export {setTareasEnStorage}
