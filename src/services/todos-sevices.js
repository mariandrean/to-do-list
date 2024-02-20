// Petición GET

export const getToDoList = async () => {
    const response = await fetch('http://localhost:8000/todos');
    const data = await response.json();
    return data;
}

export const getTaskById = async (id) => {
    const response = await fetch(`http://localhost:8000/todos/${id}`);
    const data = await response.json();
    return data;
}

// Petición DELETE

export const deleteTask = async (id) => {
    if (confirm("¿Estás seguro que quieres eliminar?") === true) {
        const response = await fetch(`http://localhost:8000/todos/${id}`, { method: "DELETE" });
        const data = await response.json();
        alert(`Tarea eliminada: ${data.name}`);
        return data;
    } else
        return 0;
}

// Petición POST

export const createTask = async (newTask) => {
    const response = await fetch('http://localhost:8000/todos', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTask)
    });
    const data = await response.json();
    alert(`Tarea creada con éxito: ${newTask.name}`);
    return data;
}

// Petición PUT

export const updateTask = async (id, modifiedTask) => {
    const response = await fetch(`http://localhost:8000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(modifiedTask)
    });
    const data = await response.json();
    alert(`Tarea actualizada: ${modifiedTask.name}`);
    return data;
}