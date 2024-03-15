import axios from "axios";

//const url = "http://localhost:8000/todos"; // json server
const url = "http://localhost:5001/api"; // backend api

export const getToDoList = async () => {
    try {
        const response = await axios.get(`${url}`);
        const data = await response.data;
        return data;
    }
    catch (error) {
        alert(error.message);
        return false;
    }
}

export const getTaskById = async (id) => {
    try {
        const response = await axios.get(`${url}/${id}`);
        const data = await response.data;
        return data;
    }
    catch (error) {
        alert(error.message);
        return false;
    }
}

export const deleteTask = async (id) => {
    try {
        if (confirm("¿Estás seguro que quieres eliminar?") === true) {
            const response = await axios.delete(`${url}/${id}`, { method: "DELETE" });
            const data = await response.data;
            //        alert(`Tarea eliminada: ${data.name}`);
            window.location.reload();
            return data;
        }
    }
    catch (error) {
        alert(error.message);
        return false;
    }
}

export const createTask = async (task) => {
    try {
        const response = await axios.post(`${url}`, task);
        const data = await response.data;
        alert(`Tarea añadida con éxito: ${data.name}`);
        return data;
    }
    catch (error) {
        alert(`${error.message}: ${error.response.data.errors.map((error) => `\n${error.msg}`)}`);
        return false;
    }
}

export const updateTask = async (id, task) => {
    try {
        const response = await axios.put(`${url}/${id}`, task);
        const data = await response.data;
        alert(`Tarea actualizada: ${data.name}`);
        return data;
    }
    catch (error) {
        alert(error.message);
        return false;
    }
}