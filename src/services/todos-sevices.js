// Petición GET

export const getToDoList = async () => {
    const response = await fetch('http://localhost:8000/todos');
    const data = await response.json();
    return data;
}

// Petición DELETE

export const deleteToDo = async (id) => {
    if(confirm("¿Estás seguro que quieres eliminar?") === true){
        const result = await fetch(`http://localhost:8000/todos/${id}`, { method: "DELETE" });
        return result;
    } else
    return 0;
}

// Petición POST

export const createToDo = async (newTask) => {
    alert(`Agregando ${newTask.name}`)
    const response = await fetch('http://localhost:8000/todos', { 
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: `{
            "name": "${newTask.name}"
        }`
    });

    const data = await response.json();
    return data;
}

// Petición PUT

const updateToDo = () => {

}