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

const createToDo = () => {

}

// Petición PUT

const updateToDo = () => {

}