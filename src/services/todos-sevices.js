// Petición GET

export const getToDoList = async () => {
    const response = await fetch('http://localhost:3000/todos');
    const data = await response.json();
    return data;
}

// Petición POST

const createToDo = () => {

}

// Petición PUT

const updateToDo = () => {

}

// Petición DELETE

const deleteToDo = () => {

}
